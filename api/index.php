<?php

header("Access-Control-Allow-Origin: *");

$pdo = new PDO('sqlite:db.sqlite');

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $comments = $pdo
            ->query('select * from comments')
            ->fetchAll(PDO::FETCH_ASSOC);

        header('Content-type: text/json');

        echo json_encode($comments);
        break;

    case 'POST':
        $author = $_POST['author'];
        $text = $_POST['text'];

        $sql = "insert into comments (author, text) VALUES ('{$author}', '{$text}')";

        $stmt = $pdo->query($sql);

        $comments = $pdo
            ->query('select * from comments')
            ->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($comments);
        break;

    default:
        die('Not valid.');
}
