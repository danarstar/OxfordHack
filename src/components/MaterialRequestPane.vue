<template>
<b-card class="p-1 mt-4">
  <b-input-group>
      <vue-bootstrap-typeahead class="w-25" placeholder="Material" v-model="material" :data="['Knob', 'Cloth', 'Plaster']"></vue-bootstrap-typeahead>
    <b-form-input class="w-25" type="number" placeholder="Quantity" v-model="quantity"></b-form-input>
      <vue-bootstrap-typeahead class="w-25" placeholder="Project" v-model="project" :data="['P1', 'P2', 'P3']"></vue-bootstrap-typeahead>
    <b-input-group-append class="w-25">
      <b-button class="w-100" variant="outline-primary">Request</b-button>
    </b-input-group-append>
  </b-input-group>
</b-card>
</template>
<script>
export default {
	data() {
		return {
	material: '',
				  quantity: 0, 
				  project: ''
}
	},
	methods: {
		lookup() {
			this.emit('lookup', this.text)
		}
	}
}
</script>
