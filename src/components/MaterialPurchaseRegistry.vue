<template>
<b-card class="mt-3">
	<b-input-group prepend="Look Up" class="w-100">
		<b-form-input v-model="search"></b-form-input>
	</b-input-group>
	<b-table :items="filtered" :fields="fields">
		<template v-slot:cell(update)="row">
			<b-button size="sm" variant="info" @click="row.toggleDetails" class="mr-2">Update</b-button>
		</template>

		<template v-slot:row-details="row">
			<b-card>
				<b-input-group>
					<b-form-input type="number" v-model="price"></b-form-input>
					<b-input-group-append>
						<b-button variant="primary" size="sm" @click="updatePrice(row)">Update Contractor Price</b-button>
						<b-button size="sm" @click="row.toggleDetails">Close</b-button>
					</b-input-group-append>
				</b-input-group>
			</b-card>
		</template>
	</b-table> 
</b-card>
</template>
<script>
export default {
	data() {
		return {
			search: '',
			price: null,
			fields: ['name', 'code', 'latest_price_per_unit', 'update'],
			materials: [
				{ name: 'Knob', code: 'KN123', latest_price_per_unit: 10.8  },
				{ name: 'Brass Knob', code: 'KN117', latest_price_per_unit: 13.2  },
				{ name: 'Iron Knob', code: 'KN133', latest_price_per_unit: 20.1  },
				{ name: 'Plaster', code: 'PL2', latest_price_per_unit: 1.2  },
			]
		}
	},
	methods: {
		updatePrice(row) {
			row.item.latest_price_per_unit = this.price
			this.price = null;
		},
		substrings(str, length) {
			var result = [];
			for (var i = 0; i <= str.length - length; i++) {
				result.push(str.substring(i, i + length));	
			}
			return result
		},
		levenshtein(a, b) {
			if(a.length == 0) return b.length; 
			if(b.length == 0) return a.length; 

			var matrix = [];

			// increment along the first column of each row
			var i;
			for(i = 0; i <= b.length; i++){
				matrix[i] = [i];
			}

			// increment each column in the first row
			var j;
			for(j = 0; j <= a.length; j++){
				matrix[0][j] = j;
			}

			// Fill in the rest of the matrix
			for(i = 1; i <= b.length; i++){
				for(j = 1; j <= a.length; j++){
					if(b.charAt(i-1) == a.charAt(j-1)){
						matrix[i][j] = matrix[i-1][j-1];
					} else {
						matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
							Math.min(matrix[i][j-1] + 1, // insertion
								matrix[i-1][j] + 1)); // deletion
					}
				}
			}
			return matrix[b.length][a.length]; 
		}
	},
	computed: {
		filtered() {
			let self = this
			if (this.search.length < 3) {
				return this.materials
			}
			return this.materials.filter((material) => {
				return [material.name, material.code].some((attr) => self.substrings(attr.toLowerCase(), self.search.length).some((substring) => self.levenshtein(substring, self.search.toLowerCase()) < 2))
			})
		}
	}
}
</script>
