"use strict";

(function(){
  angular
  .module("tracker", [])
  .controller("item_controller", ItemController);

  function ItemController(){
    var vm = this;
    vm.data = data;
    vm.sort_data_by = function(task){
      vm.sort_on = task;
      vm.is_descending = !(vm.is_descending);
    }
    vm.total_value = function(){
      var total = 0;
      vm.data.forEach(function(item){
        if(item.quantity){
          total += (item.quantity * item.hours);
        }
      });
      return total.toFixed(2);
    }
    vm.destroy = function(item_index){
      vm.data.splice(item_index, 1);
    }
    vm.new_item = {};
    vm.create = function(){
      vm.data.push(angular.copy(vm.new_item));
      vm.new_item = {};
    }
  }
})();
