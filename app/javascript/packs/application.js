// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()
import $ from 'jquery';
global.$ = jQuery;

require('packs/jquery.validate.min')
require('packs/formfieldvalidate')
require('packs/candidates')
require('datatables.net-bs4')

import "bootstrap"
import "@fortawesome/fontawesome-free/css/all"