<?php

    class contest {

        private $data = array();
        private $auth = 0;

        function __construct() {
            session_start();
            if(isset($_SESSION) && !empty($_SESSION)) {
                $this->data = $_SESSION;
                $this->auth = 1;
            }
            else $this->auth = 0;
        }

        function all($arguments) {
            $data = loadModel("contest", "fetch");
            loadView("header", array_merge($this->data, ['title' => 'Contests - CodeShows']));
            loadView("contest_collection", array_merge($data, ['len' => count($data), 'curr_time' => date("Y-m-d G:i:s")]));
            loadView("footer");
        }

        function fetch_contest($arguments) {
            $data = loadModel("contest", "fetch_contest", $arguments);
            loadView("header", array_merge($this->data, ['title' => $data['contest_name']." - CodeShows"]));
            loadView("contest_problems", array_merge($data, ['len' => count($data)]));
            loadView("footer");
        }

    }
?>