<?php
/*
Plugin Name: TheBlaze Quizzes
Plugin URI: http://www.theblaze.com/#wp/plugins/quizzes
Description: Enables admin quiz creation, user quiz interaction, and quiz result storage
Version: 0.5 Beta
Author: Z. Linke <zlinke@theblaze.com>
Author URI: http://www.theblaze.com/
*/

class TBLZ_Quizzes {

    function __construct() {
        // Setup quizzes on init
        add_action('init', array( $this, 'init_quizzes') );

        // Init Quizzes admin
        add_action('admin_init', array( $this, 'init_quizzes_admin') );

        // Init polls ajax
        require_once __DIR__ . '/php/TBLZ_quizzes_single_admin.php';
        add_action('init', array( new TBLZ_Quizzes_Single_Admin(), 'init_quizzes_single_admin') );
    }

    public function init_quizzes() {
        // Setup custom post statuses on init
        $this->init_post_type();
    }

    public function init_quizzes_admin() {
        // Quizzes admin JS and CSS
        add_action('admin_enqueue_scripts', array( $this, 'admin_js_css') );
    }

    /**
     * Create 'quiz' post type.
     */
    private function init_post_type(){

            $labels = array(
            'name'               => __( 'Quizzes' ),
            'singular_name'      => __( 'Quiz' ),
            'menu_name'          => __( 'Quizzes' ),
            'name_admin_bar'     => __( 'Quiz' ),
            'add_new'            => __( 'Add New' ),
            'add_new_item'       => __( 'Add New Quiz' ),
            'new_item'           => __( 'New Quiz'  ),
            'edit_item'          => __( 'Edit Quiz' ),
            'view_item'          => __( 'View Quiz' ),
            'all_items'          => __( 'All Quizzes' ),
            'search_items'       => __( 'Search' ),
            'parent_item_colon'  => __( 'Parent Quizzes:' ),
            'not_found'          => __( 'No quizzes found.' ),
            'not_found_in_trash' => __( 'No quizzes found in Trash.' )
        );

        $args = array(
            'labels'             => $labels,
                    'description'        => __( 'Description.' ),
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'query_var'          => true,
            'rewrite'            => array('slug' => 'quizzes'),
            'capability_type'    => 'post',
            'has_archive'        => true,
            'hierarchical'       => false,
            'menu_position'      => 30,
            'menu_icon'          => 'dashicons-chart-bar',  
            'supports'           => array( 'title', 'thumbnail', 'comments' )
        );

        register_post_type( 'quiz', $args );
    }

    /**
     * Load Quizzes js and css for admin
     */
    public function admin_js_css() {

        $current_screen = get_current_screen();

        switch( $current_screen->post_type ){

            case 'quiz':

                wp_register_script('tinymce-react', includes_url( 'js/tinymce/tinymce.min.js'));
                wp_enqueue_script('tinymce-react');

                wp_register_script('quiz-components-admin', plugins_url( 'dist/app.js', __FILE__ ), array('tinymce-react'), 1, true );
                wp_enqueue_script('quiz-components-admin');

                // Styles
                wp_register_style('quiz-admin', plugins_url( 'dist/css/admin.css', __FILE__ ),'', 1 );
                wp_enqueue_style('quiz-admin');

        }

    }

    public function tblz_quiz_admin_add_babel_type( $tag, $handle, $src ) {
        if ( $handle !== 'quiz-components-admin' ) {
            return $tag;
        }

        return '<script src="' . $src . '" type="text/babel"></script>' . "\n";
    }

}

new TBLZ_Quizzes;
