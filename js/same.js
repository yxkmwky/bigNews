$(function() {
    // 一周热门排行榜
    $.ajax({
        type: "get",
        url: "http://localhost:8080/api/v1/index/rank",
        dataType: "json",
        success: function(response) {
            // console.log(response);
            if (response.code == 200) {
                let hotList = template("hotList", response);
                $(".hotrank_list").html(hotList);
                $(".hotrank_list").children("li").eq(0).find("span").addClass("first")
                $(".hotrank_list").children("li").eq(1).find("span").addClass("second")
                $(".hotrank_list").children("li").eq(2).find("span").addClass("third")
            }
        }
    });

    // 最新评论
    $.ajax({
        type: "get",
        url: "http://localhost:8080/api/v1/index/latest_comment",
        dataType: "json",
        success: function(response) {
            // console.log(response);
            if (response.code == 200) {
                let latestComments = template("latestComments", response);
                $(".comment_list").html(latestComments);
            }
        }
    });

    // 焦点关注
    $.ajax({
        type: "get",
        url: "http://localhost:8080/api/v1/index/attention",
        dataType: "json",
        success: function(response) {
            // console.log(response);
            if (response.code == 200) {
                let focus = template("focus", response);
                $(".guanzhu_list").html(focus);
            }
        }
    });

    // 全部分类
    $.ajax({
        type: "get",
        url: "http://localhost:8080/api/v1/index/category",
        dataType: "json",
        success: function(response) {
            // console.log(response);
            if (response.code == 200) {
                let allClass = template("allClass", response);
                $("ul.level_two").html("<li class='up'></li>" + allClass);
                $("ul.left_menu").html(allClass);
            }
        }
    });
})