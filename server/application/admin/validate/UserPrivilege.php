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
namespace app\admin\validate;
use think\Db;
use think\Validate;

class UserPrivilege extends Validate {
    protected $rule = [
        'id'            => 'require|checkPrivilege',
        'name'          => 'require|unique:user_privilege,name^del',
        'image'         => 'require',

    ];
    protected $message = [
        'id.require'            => '请选择权益',
        'name.require'          => '请输入权益名称',
        'name.unique'           => '权益名称重复',
        'image.require'         => '请上传权益图标',
    ];
    protected function sceneAdd(){
        $this->remove(['id']);
    }
    protected function sceneEdit(){
        $this->remove(['id'],'checkPrivilege');
    }
    protected function sceneDel(){
        $this->remove(['name','image']);
    }
    protected function checkPrivilege($value,$rule,$data){
        $privilege = Db::name('user_level')
                    ->where("find_in_set($value,privilege) and del = 0")
                    ->column('name,privilege');
        if($privilege){
            $level_list = implode(',',array_keys($privilege));
            return '会员权益已关联'.$level_list.'会员等级，请解除关联后再删除';
        }
        return true;


    }
}