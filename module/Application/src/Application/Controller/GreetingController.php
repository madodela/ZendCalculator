<?php

namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

class GreetingController extends AbstractActionController {

    public function indexAction() {
        return new ViewModel();
    }

    public function peopleAction() {

        $num['valor'] = $this->params()->fromPost('value');
        $var = json_encode($num);
        return new ViewModel(array('num' => $var));
    }

}
