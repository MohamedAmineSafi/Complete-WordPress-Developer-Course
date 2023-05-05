<?php

function up_enqueue_scripts()
{
    $authURLs = json_encode([
        'signup' => esc_url_raw(rest_url('up/v1/signup')),
        'signin' => esc_url_raw(rest_url('up/v1/signin')),
    ]);

    wp_add_inline_script(
        // This comes from the ID of the frontend.js file (you can see it from inspect element)
        'udemy-plus-auth-modal-view-script',
        "const up_auth_rest = {$authURLs}",
        'before'
    );
}