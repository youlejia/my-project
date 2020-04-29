<template>
    <div class="user-info">
        <van-nav-bar @click-left="goBack" title="个人信息" :border="false">
            <van-icon name="left" slot="left" style="font-size:16px;"/>
        </van-nav-bar>
        <van-cell-group>
            <van-cell title="头像" class="cell_middle">
                <div class="edit">
                    <div class="avatar">
                    <div class="img">
                        <img :src="avatar" @click="setAvatar">
                    </div>
                    <input type="file" name="avatar" accept="image/gif,image/jpeg,image/jpg,image/png" style="display:none" @change="changeImage($event)" ref="avatarInput">
                    </div>
                    <div class="up_but">
                        <div class="but" @click="edit">确认修改</div>
                    </div>
                </div>
            </van-cell>
            <van-cell title="昵称" @click="nameShow = true" :value="name" isLink />
            <van-cell title="退出登录" @click="Logout" isLink />
        </van-cell-group>
        <van-dialog
        v-model="nameShow"
        show-cancel-button
        :before-close="nameBeforeClose"
        >
            <van-field
                v-model="name"
                label="昵称"
                placeholder="请输入昵称"
                right-icon="clear"
                @click-right-icon="name = ''"
            />
        </van-dialog>
    </div>
</template>

<script>
export default {
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#f9f9f9')
	},
	beforeDestroy () {
		document.querySelector('body').removeAttribute('style')
	},
    data(){
        return{
            nameShow: false,
            avatar:'http://tg.simutz.com/avatar/83564_middle.jpg',
            name:'哈哈哈',
            user: {}
        }
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        },
        nameBeforeClose(action, done) {
            if (action === 'confirm') {
                setTimeout(done, 1000);
            } else {
                done();
            }
        },
        Logout(){
            setTimeout(() => {
				localStorage.removeItem('Authorization');
                this.$router.push('/login');
			},1000)
           
            
        },
        edit() {// 修改头像
            if (this.$refs.avatarInput.files.length !== 0) {
                var image = new FormData()
                image.append('file', this.$refs.avatarInput.files[0])
                this.$axios.post('/article/upload', image, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then(res=>{
                    console.log(res.data)
                    this.avatar = "/api"+ res.data.data.fileName;
                })
            }
        },
        setAvatar() {
            this.$refs.avatarInput.click()
        },
        changeImage(e) {
            var file = e.target.files[0]
            var reader = new FileReader()
            var that = this
            reader.readAsDataURL(file)
            reader.onload = function(e) {
                that.avatar = this.result
            }
        }
    },
    mounted(){
        var params = {
                username:this.name
            };
        this.$axios.post('user/data',params).then(res => {
                console.log(res)
        })
        .catch(error => {
          　　　　console.log("出错喽："+error);
        });
    }
}
</script>

<style lang="less" scoped="scoped">
.user-info {
    .user_avatar_upload {
        position: relative;
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        img {
            width: 100%;
            height: 100%;
        }
        i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 20px;
            color: #ccc;
        }
    }
    .avatar{
        .img{
            display: inline-block;
            width: 50px;
            height: 50px;
            border: 1px solid #ccc;
            img {
                width: 100%;
                height: 100%;
                
            } 
        }
    }
    .up_but{
        .but{
            display: inline-block;
            width: 50px;
            font-size: 12px;
            color: cornflowerblue;
            text-align: center;
        }
    }
}
</style>