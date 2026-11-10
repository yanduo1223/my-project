
// 获取项目详情按钮
const detailBtn = document.getElementById("detailBtn");

// 获取项目详情区域
const detail = document.getElementById("detail");

// 如果按钮存在，就添加点击事件
if (detailBtn && detail) {

    detailBtn.addEventListener("click", function () {

        // 切换隐藏状态
        detail.classList.toggle("hidden");

        // 修改按钮文字
        if (detail.classList.contains("hidden")) {
            detailBtn.textContent = "查看项目详情";
        } else {
            detailBtn.textContent = "收起项目详情";
        }

    });
}


// 获取404测试按钮
const fetchBtn = document.getElementById("fetchBtn");

const fetchResult = document.getElementById("fetchResult");

if (fetchBtn && fetchResult) {

    fetchBtn.addEventListener("click", async function () {

        fetchResult.textContent = "正在请求……";

        try {

            const response = await fetch(
                "/not-found-demo.json"
            );

            fetchResult.textContent =
                "请求完成，状态码：" + response.status;

        } catch (error) {

            fetchResult.textContent =
                "请求失败：" + error.message;

        }

    });

}
