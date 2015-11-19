# 2016HackNTU
## 安裝
環境： node.js 0.12up，身為 hacker 就應該知道怎麼去安裝ㄏㄏ~~  
clone 下來先 `npm i`  
把 `config.js.example` copy 成 `config.js`  來調整 config  
忘記 copy 會壞掉喔～～～  

##啟動
`npm start` node app.js 不會 work 喔～～  

## 怎麼用 github 一起玩

首先要開發新功能就先切到 develop beanch  
`git checkout develop`  
然後自己開一個新個 branch ，名字自己取，身為一個 hacker 就要會取帥氣的名字  
範例： `git checkout -b naruto`  
然後就在這個 branch 上 add, commit, push (這個還要教嗎??)  
開發完成請在 github 上開 pull request 目標 `develop`  
開完後大家一起驗證的功能後覺得 ok 就把他 merge 進去吧～  
`master` branch 是用來做 release 版本用的，沒事請不要推到 master 喔^.<  

