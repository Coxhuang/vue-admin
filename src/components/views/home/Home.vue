<style lang="scss" scoped>
	.my-home{
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background-color: inherit;
	}
</style>

<template>
	<div class="my-home">
		<el-container>
			<el-header style="text-align: right; font-size: 12px">
				<myheader></myheader>
			</el-header>

<!--			<el-main>-->
<!--				<container></container>-->
<!--			</el-main>-->
		</el-container>
	</div>
</template>

<script>
	import container from "@/components/views/home/container/Container"
	import myheader from "@/components/views/home/header/Header"

	export default {
		name: 'Home',
		data() {
			const item = {
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			};
			return {
				tableData: Array(20).fill(item)
			}
		},
		components:{
            myheader,
            container,
		}
}
</script>


