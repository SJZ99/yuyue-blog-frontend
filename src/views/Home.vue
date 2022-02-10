<template>
	<div class="home">
		{{ $router.currentRoute.name }}
	</div>
</template>

<script>
import vuex from '../js/vuex'
export default {
  name: 'Home',
}
</script>
