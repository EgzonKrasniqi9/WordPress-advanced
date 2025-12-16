<?php

function wpdevs_customize( $wp_customize ) {

    $wp_customize->add_section(
        'sec_copyright',  
        array(
        'title'       => __( 'Copyright Settings' ),
        'description' => __( 'Copyright Settings' ),
        
    ) 
);
    $wp_customize->add_setting(
        'set_copyright',  
        array(
            'type'        => 'theme_mod',
        'default'     => '© 2024 WordPress Advanced. All Rights Reserved.',
        'sanitize_callback' => 'sanitize_text_field',
        
    ) 
);

    $wp_customize->add_control(
        'set_copyright',  
        array(
            'label'       => 'Copyright Information',
        'description' => 'Please type your copyright here',
        'section'     => 'sec_copyright',
        'type'        => 'text',
        
    ) 
);

   
}
add_action( 'customize_register', 'wpdevs_customize' );
?>