<?php
/**
 * 缇亚娜插件，移植自ACG和谐区
 * 
 * @package 涉谷有利
 * @author 昌浩
 * @version 1.0.0
 * @link http://www.shibuyayuri.com
 */
class Kiana_Plugin implements Typecho_Plugin_Interface
{
    /**
     * 激活插件方法,如果激活失败,直接抛出异常
     * 
     * @access public
     * @return void
     * @throws Typecho_Plugin_Exception
     */
    public static function activate()
    {
        Typecho_Plugin::factory('Widget_Archive')->footer = array('Kiana_Plugin', 'footer');
    }
    
    /**
     * 禁用插件方法,如果禁用失败,直接抛出异常
     * 
     * @static
     * @access public
     * @return void
     * @throws Typecho_Plugin_Exception
     */
    public static function deactivate(){}
    
       /**
     * 获取插件配置面板
     * 
     * @access public
     * @param Typecho_Widget_Helper_Form $form 配置面板
     * @return void
     */
    public static function config(Typecho_Widget_Helper_Form $form){}
    
    /**
     * 个人用户的配置面板
     * 
     * @access public
     * @param Typecho_Widget_Helper_Form $form
     * @return void
     */
    public static function personalConfig(Typecho_Widget_Helper_Form $form){}

    /**
     * 输出底部JS
     * 
     * @access public
     * @return void
     */
    public static function footer(){
    // 引入jq库
    echo '<script src="//upcdn.b0.upaiyun.com/libs/jquery/jquery-2.0.3.min.js"></script>';
    // 引入主js文件
    echo '<script src="usr/plugins/Kiana/Kiana.js"></script>';

    }



}