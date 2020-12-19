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
namespace app\api\validate;

use app\api\model\User;
use think\{
    Db,
    Validate
};
class SmsSend extends Validate{
    protected $rule = [
        'mobile'        => 'require|checkSms',
        'key'           => 'checkMobile',
    ];
    protected $message = [
        'mobile.require'     => '请输入手机号码',
    ];
    protected function checkSms($value,$rule,$data){
        $send_time = Db::name('sms_log')->where(['message_key'=>$data['key'],'mobile'=>$value])
                ->order('id desc')
                ->value('send_time');
        if($send_time && $send_time + 60 > time()){
            return '验证码发送频繁，请稍后在发送';
        }
        return true;
    }

    protected function checkMobile($value,$rule,$data){
        $user = User::get(['mobile'=>$data['mobile'],'del'=>0]);

        switch ($value){
            case 'ZCYZ':    //注册验证
                if($user) return '该手机号码已存在，不可以再注册';
                break;
            case 'YZMDL':   //验证码登录
            case 'ZHMM':    //找回密码
                if(empty($user)) return '手机号码不存在，请重新输入';
                break;
        }
        return true;
    }

}