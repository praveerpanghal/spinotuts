 'use strict';
 var app = angular.module('SpinoApp',['ngRoute','ngResource','ui.router','ngSanitize','ngStorage','angularUtils.directives.dirPagination','ui.bootstrap', 'mj.scrollingTabs','angularModalService','ngFileUpload','colorpicker.module', 'wysiwyg.module','infinite-scroll','ngImgCrop','ngMeta']);

 app.config( function(){
    new Clipboard('.copybtn');
    
    for (var i = 0; i < 1000; i++) {
        var na='.copybtn'+i;
        new Clipboard(na);
    }
}); 
 app.value('myAppURLs',{
    Login: BaseURL+"/Login",
    SignUp: BaseURL+"/SignUp",
    GetData: BaseURL+"/GetData",
    GetApprovedArticleList: BaseURL+"/GetApprovedArticleList",
    GetMainArticle: BaseURL+"/GetMainArticle",
    PostArticle: BaseURL+"/PostArticle",
    ModifyArticles: BaseURL+"/ModifyArticles",
    DisapproveArticle: BaseURL+"/DisapproveArticle",
    GetArticlesInformation:BaseURL+"/GetArticlesInformation",
    GeneralMenu:BaseURL+"/GeneralMenu",
    AuthorizedMenu:BaseURL+"/AuthorizedMenu",
    RemoveArticles:BaseURL+"/RemoveArticles",
    AddExceptionLog:BaseURL+"/AddExceptionLog",
    GetExceptionLog:BaseURL+"/GetExceptionLog",
    ForGotPwd:BaseURL+"/ForgotPassword",
    ChangePassword:BaseURL+"/ChangePassword",
    GetUserList:BaseURL+"/GetUserList",
    ManageUserRights:BaseURL+"/ManageUserRights",
    GetUserProfileDetails:BaseURL+"/GetUserProfileDetails",
    GetCountryList:BaseURL+"/GetCountryList",
    GetStateList:BaseURL+"/GetStateList",
    UpdateUserProfile:BaseURL+"/UpdateUserProfile",
    GetReport:BaseURL+"/GetReport",
    GetNavigationControl:BaseURL+"/GetNavigationControl",
    UpdateTopNavigation:BaseURL+"/UpdateTopNavigation",
    UpdateChildNavigation:BaseURL+"/UpdateChildNavigation",
    CreateTopNavigation:BaseURL+"/CreateTopNavigation",
    GetScreenRights:BaseURL+"/GetScreenRights",
    GetParentNavigationList:BaseURL+"/GetParentNavigationList",
    CreateChildNavigation:BaseURL+"/CreateChildNavigation",
    PostBookChapter:BaseURL+"/PostBookChapter",
    GetEbookChapterList:BaseURL+"/GetEbookChapterList",
    UpdateBookChapter:BaseURL+"/UpdateBookChapter",
    SubmitBookContent:BaseURL+"/SubmitBookContent",
    UpdateBookContent:BaseURL+"/UpdateBookContent",
    SubmitInterviewQuestions:BaseURL+"/SubmitInterviewQuestions",
    fetchcategory:BaseURL+"/fetchcategory",
    GetInterviewQuestionsList:BaseURL+"/GetInterviewQuestionsList",
    ModifyInterviewQuestions:BaseURL+"/ModifyInterviewQuestions",
    GetLookup:BaseURL+"/GetLookup",
    GetRouteList:BaseURL+"/GetRouteList",
    GetCategory:BaseURL+"/GetCategory",
    CreateChildSubNavigation:BaseURL+"/CreateChildSubNavigation",
    GetChildSubNavigation:BaseURL+"/GetChildSubNavigation",
    ModifyChildSubNavigation:BaseURL+"/ModifyChildSubNavigation",
    PostComments:BaseURL+"/PostComments",
    PostBlog:BaseURL+"/PostBlog",
    GetMyBlog:BaseURL+"/GetMyBlog",
    ModifyMyBlog:BaseURL+"/ModifyMyBlog",
    GetBlogs:BaseURL+"/GetBlogs",
    GetSingleBlog:BaseURL+"/GetSingleBlog"
});