<?php

function up_rest_api_add_rating_handler($req)
{
    $response = ['status' => 1];
    $params = $req->get_json_params();

    if (
        !isset($params['postID'], $params['rating']) ||
        empty($params['postID']) ||
        empty($params['rating'])
    ) {
        return $response;
    }

    $response = ['status' => 2];
    return $response;
}