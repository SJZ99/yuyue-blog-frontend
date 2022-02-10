<template>
	<div id="app">
		<v-app>
			<Header :title="$router.currentRoute.meta.routerName" />

			<router-view class="content"></router-view>
			
			<Footer></Footer>
		</v-app>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
	components: {
		Header,
		Footer
	}
}
</script>


<style lang="scss">
.content {
	margin-bottom: 56px;
	background: #001126;
}
</style>
