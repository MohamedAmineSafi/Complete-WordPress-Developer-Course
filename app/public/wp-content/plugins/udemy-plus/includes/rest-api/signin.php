<?php

function up_rest_api_signin_handler($req)
{
    $response = ['status' => 1];
    $params = $req->get_json_params();

    if (
        !isset($params['user_login'], $params['password']) ||
        empty($params['user_login']) ||
        empty($params['password'])
    ) {
        return $response;
    }

    $response['status'] = 2;
    return $response;
}