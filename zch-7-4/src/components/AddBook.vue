<template>
    <div>
    <input type="text" placeholder="书名" v-model="bookObj.bookname">
    <br>
    <input type="text" placeholder="作者" v-model="bookObj.author">
    <br>
    <input type="text" placeholder="出版社" v-model="bookObj.publisher">
    <br>
    <button @click="addBook">新增</button>
    </div>
</template>

<script>
    export default {
            data() {
        return {
            bookObj: { // 参数名提前和后台的参数名对上-发送请求就不用再次对接了
            bookname: "",
            author: "",
            publisher: ""
        },
        bookname: '',
        }
    },
    methods: {
        addBook() {
            this.$axios({
                url: '/api/addbook',
                method: 'POST',
                data: {
                    ...this.bookObj,
                }
            }).then((res) => {
                console.log(res);
            })
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>