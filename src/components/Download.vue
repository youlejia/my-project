<template>
    <div class="download">
        <div class="left"  @click="goback()">
            <van-icon name="arrow-left" size='18px' color="#fff" />
        </div>
        <div class="top">
            <img src="../assets/image/top.png" alt="">
        </div>
        <div class="central">
            <img src="../assets/image/bjing.png" alt="">
        </div>
        <div class="head">
            <div v-show="selection==0" class="imgs">
                <!-- <img src="../assets/image/tgt.png" alt=""> -->
                <div class="qr" id="qrcode" ></div>
            </div>
            <div v-show="selection==1" class="imgs">
                <!-- <img src="../assets/image/tgt.png" alt=""> -->
                <div class="qr" id="qrcodes" ></div>
            </div>
            <div class="but">
                <van-button :class="selection==0?'but1':'but2'" round size="large" @click="toAnd">Android 端</van-button>
            </div>
            <div class="but">
                <van-button :class="selection==1?'but1':'but2'" round size="large" @click="toIos">Ios 端</van-button>
            </div> 
        </div>
    </div>
</template>

<script>
import QRCode  from "qrcodejs2"
export default {
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#FFFFFF')
    },
    beforeDestroy () {
        document.querySelector('body').removeAttribute('style')
    },
    data(){
        return{
            background_image: require('../assets/image/download.png'),
            selection:0,
            link: 'https://lanzous.com/icprs6d',
            links: 'http://ff.iweixinyingxiao.com/upload?code=UakbQBvF'
        }
    },
    components: { QRCode },
    methods:{
        toAnd(){
            this.selection=0;
            window.location.href = 'https://lanzous.com/icprs6d'; 
        },
        toIos(){
            this.selection=1;
            window.location.href = 'http://ff.iweixinyingxiao.com/upload?code=UakbQBvF'; 
        },
        qrcode () {
            let that = this;
            let qrcode = new QRCode('qrcode', {
                width: 124,
                height: 124,        // 高度
                text:  this.link,   // 二维码内容
            })
        },
        qrcodes () {
            let that = this;
            let qrcodes = new QRCode('qrcodes', {
                width: 124,
                height: 124,        // 高度
                text:  this.links,   // 二维码内容
            })
        },
        goback(){
            this.$router.push('/');
        }
    },
    mounted(){
        this.$nextTick (function () {
            this.qrcode();
            this.qrcodes();
        })
    }
}
</script>

<style lang="less" scoped="scoped">
    .download{
        .left{
            position: absolute;
            top: 12px;
            left: 15px;
        }
        .top{
            background: linear-gradient(top,#2E81F3,rgba(76, 177, 255, 0.05));
            img{
                width: 120px;
                height: 52px;
                margin: 0 auto;
                padding: 100px 0;
            }
        }
        .central{
            margin-top: -60px;
            img{
                width: 100%;
            }
        }
        .head {
            .imgs{
                text-align: center;
                margin:10px 0 25px 0;
                .qr{
                    width: 134px;
                    height: 134px;
                    margin: 0 auto;
                }
            }
            .but{
                width: 60%;
                margin: 20px auto;
                .van-button{
                    border: 0;
                    line-height: 44px;
                    height: 44px;
                }
                .but1{
                    background: linear-gradient(left,#4CB1FF,#2E81F3);
                    color: #ffffff;
                }
                .but2{
                    border: 1px solid #2E81F3;
                    color: #2E81F3;
                }
            }
        }
    }
</style>