<?php

function up_rest_api_signup_handler($req)
{
    $response = ['status' => 1];
    $params = $req->get_json_params();

    if (
        !isset($params['email'], $params['username'], $params['password'])
        ||
        empty($params['email'])
        ||
        empty($params['username'])
        ||
        empty($params['password'])
    ) {
        return $response;
    }

    $email = sanitize_email($params['email']);
    $username = sanitize_text_field($params['username']);
    $password = sanitize_text_field($params['password']);

    if (
        username_exists($username) ||
        !is_email($email) ||
        email_exists($email)
    ) {
        return $response;
    }

    $response = ['status' => 2];
    return $response;
}