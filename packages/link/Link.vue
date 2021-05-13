<template>
    <router-link class="ix-link" :target="target" :href="href" :to="to"
            :class="[type ? 'ix-'+type : null, disabled ? 'disabled' : '']">
      <i v-if="icon" class="ix-icon" :class="icon"></i>
      <slot></slot>
    </router-link>
</template>

<script>
    export default {
      name: "ix-link",
      props: {
        icon: String,
        disabled: Boolean,
        type: {
          type: String,
          default: 'default'
        },
        href: '',
        to: { type: [String, Object], default: '' },
        target: ''
      },
      methods: {
        onclick (event) {
          if (this.to) {
            event.stopPropagation()
            event.preventDefault()
            this.$router.push(this.to)
          }
        }
      }
    }
</script>
