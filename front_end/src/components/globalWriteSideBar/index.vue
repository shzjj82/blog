<template>
    <div class="global-write-sidebar">
        <div class="global-write-nav">
            <ul class="global-sideBar-navList">
                <li v-for='item in navList' :key='item.icon' class='global-sideBar-navItem'>
                    <i :class='item.icon' class='icon'/>
                    <span class='nav-text'>{{item.label}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            navList:[{
                label:'我的收藏',
                icon:'el-icon-star-on'
            },{
                label:'我关注的问题',
                icon:'el-icon-question'
            },{
                label:'我的邀请',
                icon:'el-icon-user-solid'
            }]
        }
    }
}
</script>
<style lang="less" scoped>
ul,li{
    list-style-type: none
}
    .global-sideBar-navList{
        padding:8px 0;
        margin-top:10px;
        background:#fff;
        .global-sideBar-navItem{
            padding:0 20px;
            height:40px;
            display:flex;
            flex-direction: row;
            align-items: center;
            .icon{
                color:#8590a6;
            }
            .nav-text{
                margin:0 10px;
                font-size:14px;
                color:#8590a6;
            }
        }
    }
</style>