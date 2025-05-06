<script setup>

	import { ref, onMounted, onUnmounted, computed, watchEffect } from 'vue'

	const style = ref({
		position: 'fixed',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: 'rgb(249 249 249)',
		width: '100%'
	})

	function isMobileBrowser() {
		return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
	}

	function prepareStyle() {
		const width = window.innerWidth
		const height = window.innerHeight
		const ratio = width / height
		const vertical = !(ratio >= 0.75)
		const new_width = (3 / 4) * height

		style.value = {
			...style.value,
			width: vertical ? 'auto' : `${new_width}px`,
			left: vertical ? 0 : `calc(50% - ${Math.round(new_width / 2)}px)`,
			right: vertical ? 0 : 'auto'
		}
	}

	onMounted(() => {
		
		if (isMobileBrowser()) {
			return;
		}

		prepareStyle()
		window.addEventListener('resize', prepareStyle)
	})

	onUnmounted(() => {
		window.removeEventListener('resize', prepareStyle)
	})
</script>

<template>
  <div :style="style">
    <slot />
  </div>
</template>
