<?php
// +----------------------------------------------------------------------
// | LikeShop有特色的全开源社交分销电商系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 商业用途务必购买系统授权，以免引起不必要的法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | 微信公众号：好象科技
// | 访问官网：http://www.likemarket.net
// | 访问社区：http://bbs.likemarket.net
// | 访问手册：http://doc.likemarket.net
// | 好象科技开发团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | Author: LikeShopTeam
// +----------------------------------------------------------------------


namespace app\admin\logic;


use think\Db;
use think\helper\Time;

class LogLogic
{

    /**
     * 获取日志列表
     * @param $page_no
     * @param $size
     * @param $get
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public static function lists($page_no, $size, $get)
    {

        $where[] = ['create_time', 'between', Time::today()];

        if (isset($get['start_time']) && $get['start_time'] && isset($get['end_time']) && $get['end_time']) {
            $where[] = ['create_time', 'between', [strtotime($get['start_time']), strtotime($get['end_time'])]];
        }


        if (isset($get['account']) && $get['account']) {
            $where[] = ['account', 'like', "%{$get['account']}%"];
        }
        if (isset($get['type']) && $get['type']) {
            $where[] = ['type', 'eq', $get['type']];
        }
        if (isset($get['uri']) && $get['uri']) {
            $where[] = ['uri', 'like', "%{$get['uri']}%"];
        }
        if (isset($get['ip']) && $get['ip']) {
            $where[] = ['ip', 'like', "%{$get['ip']}%"];
        }


        $lists = Db::name('system_log')
            ->where($where)
            ->page($page_no, $size)
            ->order(['id' => 'desc'])
            ->select();
        foreach ($lists as $k => $v) {
            $lists[$k]['create_time_str'] = date('Y-m-d H:i:s', $v['create_time']);
            $lists[$k]['param'] = str_replace([" ", "　", "\t", "\n", "\r"], '', $v['param']);
        }

        $count = Db::name('system_log')
            ->where($where)
            ->page($page_no, $size)
            ->count();
        return ['lists' => $lists, 'count' => $count];
    }
}