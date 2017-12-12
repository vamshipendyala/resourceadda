app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'templates/name.html',
            controller: 'myCtrl'
        })
        .state('login', {
            url: '/admin_login',
            templateUrl: 'templates/adminlogin.html',
            controller: 'adminloginCtrl'       
        })
        .state('adminDashboard', {
            url: '/admin_dashboard',
            templateUrl: 'templates/admin_dashboard.html',
            controller: ''       
        })
        .state('customerLogin', {
            url: '/customerLogin',
            templateUrl: 'templates/customerlogin.html',
            controller: 'customerloginCtrl'       
        })
        .state('customer', {
            url: '/customer',
            templateUrl: 'templates/customer.html',
            controller: ''       
        })
        .state('pagination', {
            url: '/pagination',
            templateUrl: 'templates/pagination-table.html',
            controller: 'listdata'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'templates/form.html',
            controller: ''
        })
        .state('vendor', {
            url: '/vendor',
            templateUrl: 'templates/vendor.html',
            controller: ''
        })
       .state('vendor.dashboard', {
            url: '/dashboard',
            templateUrl: 'templates/dashboard.html',
            controller: 'dashboardCtrl'
        })
       .state('vendor.dashboard.ui', {
            url: '/dashboard-ui',
            templateUrl: 'templates/dashboard-ui.html',
            controller: 'dashboardCtrl1'
        })
       .state('vendor.dashboard.java', {
            url: '/dashboard-java',
            templateUrl: 'templates/dashboard-java.html',
            controller: 'dashboardCtrl1'
        })
       .state('vendor.dashboard.idm', {
            url: '/dashboard-idm',
            templateUrl: 'templates/dashboard-idm.html',
            controller: 'dashboardCtrl1'
        })
       .state('vendor.dashboard.sale', {
            url: '/dashboard-sale',
            templateUrl: 'templates/dashboard-sale.html',
            controller: 'dashboardCtrl1'
        })
       .state('vendor.addresource', {
            url: '/addresource',
            templateUrl: 'templates/addresource.html',
            controller: ''
        })
          .state('vendor.registration', {
            url: '/vendor-registration',
            templateUrl: 'templates/vendor-registration.html',
            controller: ''
        })
          .state('vendor.adduser', {
            url: '/adduser',
            templateUrl: 'templates/adduser.html',
            controller: ''
        })
          .state('vendor.report', {
            url: '/report',
            templateUrl: 'templates/reports.html',
            controller: 'report'
        })
          .state('vendor.editprofile', {
            url: '/editprofile',
            templateUrl: 'templates/editprofile.html',
            controller: ''
        })
        
          .state('postjob', {
            url: '/adduser/postjob',
            templateUrl: 'templates/post-job.html',
            controller: ''
        })
          

});