const express = require('express'),
      router = express.Router(),
      mysql = require('../config/mysql');

/**
 * webapp数据 首页
 */

/* 轮播大图 */
router.get('/api/banner/:type', (req, res) => {
    const type = req.params.type;
    const sql = 'SELECT * FROM banner WHERE type = ?';

    mysql(sql, [type], (err, data) => {
        res.json({result: data});
        if (err) {
            res.json({result: '数据获取失败'});
        }
    });
});

/* 10大金刚 */
router.get('/api/nav/:type', (req, res) => {
    const type = req.params.type;
    const sql = 'SELECT * FROM mobile_nav WHERE type = ?';

    mysql(sql, [type], (err, data) => {
        res.json({result: data});
        if (err) {
            res.json({result: '数据获取失败'});
        }
    });
});

/* 快报 */
router.get('/api/news/:type', (req, res) => {
    const type = req.params.type;
    const sql = 'SELECT * FROM news WHERE type = ?';

    mysql(sql, [type], (err, data) => {
        res.json({result: data});
        if (err) {
            res.json({result: '数据获取失败'});
        }
    });
});

/* 购特色 */
router.get('/api/goods_list/:type/:sectype', (req, res) => {
    const type = req.params.type;
    const sectype = req.params.sectype;
    const sql = 'SELECT * FROM goods_list WHERE type = ?';
    const sql2 = 'SELECT * FROM goods_detail WHERE type = ? and sectype = ?';
    if (!(type === '0')) {
        mysql(sql, [type], (err, data) => {
            res.json({result: data});
            if (err) {
                res.json({result: '数据获取失败'});
            }
        });
    } else {
        mysql(sql2, [type, sectype], (err, data) => {
            res.json({result: data});
            if (err) {
                res.json({result: '数据获取失败'});
            }
        });
    }
});

/* 为您推荐 */
router.get('/api/goods_recomment/:count', (req, res) => {
    const count = req.params.count;
    const sql = 'SELECT * FROM goods_detail order by salescount desc limit 12';

    mysql(sql, (err, data) => {
        console.log(data);
        res.json({result: data});
        if (err) {
            res.json({result: '数据获取失败'});
        }
    });
});

/**
 * webapp数据 商品详情页面
 */
router.get('/api/goods_detail/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM goods_detail WHERE id = ?';

    mysql(sql, [id], (err, data) => {
        res.json({result: data});
        if (err) {
            res.json({result: '数据获取失败'});
        }
    });
});

/**
 * pc 路由
 */
router.use('/reg', require('./reg'));


module.exports = router;