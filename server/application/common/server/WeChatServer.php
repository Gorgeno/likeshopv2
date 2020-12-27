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


namespace app\common\server;




use app\common\model\Client_;
use think\Db;

class WeChatServer
{
    /**
     * 获取小程序配置
     * @return array
     */
    public static function getMnpConfig()
    {
        $config = [
            'app_id' => ConfigServer::get('mnp', 'app_id'),
            'secret' => ConfigServer::get('mnp', 'secret' ),
            'mch_id' => ConfigServer::get('mnp', 'mch_id'),
            'key' => ConfigServer::get('mnp', 'key'),
            'response_type' => 'array',
            'log' => [
                'level' => 'debug',
                'file' => '../runtime/log/wechat.log'
            ],
        ];
        return $config;
    }

    /**
     * 获取微信公众号配置
     * @return array
     */
    public static function getOaConfig()
    {
        $config = [
            'app_id' => ConfigServer::get('oa', 'app_id'),
            'secret' => ConfigServer::get('oa', 'secret'),
            'mch_id' => ConfigServer::get('oa', 'mch_id'),
            'key' => ConfigServer::get('oa', 'key'),
            'token' => ConfigServer::get('oa', 'token',''),
            'response_type' => 'array',
            'log' => [
                'level' => 'debug',
                'file' => '../runtime/log/wechat.log'
            ],
        ];
        return $config;
    }

    /**
     * 获取微信开放平台应用配置
     * @return array
     */
    public static function getOpConfig()
    {
        $config = [
            'app_id' => ConfigServer::get('op', 'app_id'),
            'secret' => ConfigServer::get('op', 'secret'),
            'response_type' => 'array',
            'log' => [
                'level' => 'debug',
                'file' => '../runtime/log/wechat.log'
            ],
        ];
        return $config;
    }


    /**
     * 获取小程序支付配置
     * @return array
     */
    public static function getMnpPayConfig()
    {
        $pay = Db::name('dev_pay')->where(['type' => 3])->find();

        if (empty($pay)){
            return [];
        }

        $config = [
            'app_id' => $pay['app_id'],
            'secret' => $pay['app_secrect'],
            'mch_id' => $pay['mch_id'],
            'key' => $pay['pay_sign_key'],
            'cert_path' => $pay['apiclient_cert'],
            'key_path' => $pay['apiclient_key'],
            'response_type' => 'array',
            'log' => [
                'level' => 'debug',
                'file' => '../runtime/log/wechat.log'
            ],
        ];
        return $config;
    }


    /**
     * 获取公众号支付配置
     * @return array
     */
    public static function getOaPayConfig()
    {
        $pay = Db::name('dev_pay')->where(['type' => 2])->find();

        if (empty($pay)){
            return [];
        }

        $config = [
            'app_id' => $pay['app_id'],
            'secret' => $pay['app_secrect'],
            'mch_id' => $pay['mch_id'],
            'key' => $pay['pay_sign_key'],
            'cert_path' => $pay['apiclient_cert'],
            'key_path' => $pay['apiclient_key'],
            'response_type' => 'array',
            'log' => [
                'level' => 'debug',
                'file' => '../runtime/log/wechat.log'
            ],
        ];
        return $config;
    }


    /**
     * 获取app支付配置
     * @return array
     */
    public static function getOpPayConfig()
    {
        $pay = Db::name('dev_pay')->where(['type' => 5])->find();

        if (empty($pay)){
            return [];
        }

        $config = [
            'app_id' => $pay['app_id'],
            'secret' => $pay['app_secrect'],
            'mch_id' => $pay['mch_id'],
            'key' => $pay['pay_sign_key'],
            'cert_path' => $pay['apiclient_cert'],
            'key_path' => $pay['apiclient_key'],
            'response_type' => 'array',
            'log' => [
                'level' => 'debug',
                'file' => '../runtime/log/wechat.log'
            ],
        ];
        return $config;
    }


    /**
     * 根据不同来源获取支付配置
     */

    //获取支付配置
    public static function getPayConfigBySource($order_source)
    {
        $config = [];
        switch ($order_source) {
            case Client_::mnp:
                $config = self::getMnpPayConfig();
                break;
            case Client_::h5:
                $config = self::getOaPayConfig();
                break;
            case Client_::android:
                $config = self::getOpPayConfig();
                break;
            case Client_::ios:
                $config = self::getOpPayConfig();
                break;
        }
        return $config;
    }
}