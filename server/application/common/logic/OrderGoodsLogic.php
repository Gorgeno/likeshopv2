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

namespace app\common\logic;


use app\api\logic\SeckillLogic;
use think\Db;

/**
 * 订单商品逻辑
 * Class OrderGoodsLogic
 * @package app\common\logic
 */
class OrderGoodsLogic
{
    //返回订单库存,销量
    public static function backStock($order_goods)
    {
        foreach ($order_goods as $good) {
            //回退库存,回退规格库存,减少商品销量
            Db::name('goods')
                ->where('id', $good['goods_id'])
                ->update([
                    'sales_sum' => Db::raw("sales_sum-" . $good['goods_num']),
                    'stock' => Db::raw('stock+' . $good['goods_num'])
                ]);

            //补充规格表库存
            Db::name('goods_item')
                ->where('id', $good['item_id'])
                ->setInc('stock', $good['goods_num']);
        }
    }


    //下单扣除订单库存
    public static function decStock($goods)
    {
        $seckill_data = SeckillLogic::getSeckillGoods();
        $seckill = $seckill_data['seckill'];
        $seckill_goods = $seckill_data['seckill_goods'];

        foreach ($goods as $k1 => $good) {
            $item_id = $good['item_id'];
            //扣除库存,扣除规格库存,增加商品销量
            Db::name('goods')
                ->where('id', $good['goods_id'])
                ->update([
                    'sales_sum' => Db::raw("sales_sum+" . $good['goods_num']),
                    'stock' => Db::raw('stock-' . $good['goods_num'])
                ]);

            //扣除规格表库存
            Db::name('goods_item')
                ->where('id', $item_id)
                ->setDec('stock', $good['goods_num']);

            //秒杀商品增加销量
            if (isset($seckill_goods[$item_id])){
                $seckill_goods_id = $seckill_goods[$item_id]['seckill_goods_id'];
                Db::name('seckill_goods')
                    ->where('id', $seckill_goods_id)
                    ->update([
                        'sales_sum' => Db::raw("sales_sum+" . $good['goods_num']),
                        'update_time' => time()
                    ]);
            }
        }
    }

}