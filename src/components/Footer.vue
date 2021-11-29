<template>
    <div class="footer">
		<div class="contacts">
			<div class="rv">
				<span>RVCE</span>
				<span>Bengaluru</span>
				<span>Number</span>
			</div>
			<div class="diet">
				<span>DIET</span>
				<span>Ramnagara</span>
				<span>Number</span>
			</div>
		</div>
    </div>
</template>

<style>
.footer{
	height: 100px;
	display: flex;
	align-items: center;
	background: #F24E1E;
	color: black;
	flex-direction: row;
}

.contacts{
	display: flex;
	flex-direction: row;
}
</style>

<script>
export default {
	name: 'Footer'
}
</script>