<template>
    <b-container>
        <b-row>
            <b-col cols=6>
                <material-look-up-pane>
                </material-look-up-pane>
            </b-col>
            <b-col cols=12>
                <material-request-pane>
                </material-request-pane>
            </b-col>
            <b-col cols=12>
                <material-status-pane>
                </material-status-pane>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import MaterialLookUpPane from 'components/MaterialLookUpPane.vue'
import MaterialRequestPane from 'components/MaterialRequestPane.vue'
import MaterialStatusPane from 'components/MaterialStatusPane.vue'
export default {
    components: { 
        MaterialLookUpPane,
        MaterialRequestPane,
        MaterialStatusPane
    }
}
</script>
