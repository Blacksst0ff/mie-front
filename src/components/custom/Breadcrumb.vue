<template>
  <div class="page__section">
    <nav v-if="breadcrumbs.length" class="breadcrumb breadcrumb_type" aria-label="breadcrumb">
      <ol class="breadcrumb__list r-list">
        <li class="breadcrumb__group" v-for="(b, index) in breadcrumbs" :key="index">
          <router-link v-if="index !== breadcrumbs.length - 1" class="breadcrumb__point r-link" :to="{ name: b.path }" aria-hidden="true" >
            {{ b.text }}
          </router-link>
          <span
            v-else
            class="breadcrumb__point"
            aria-current="page"
          >
            {{ b.text }}
          </span>
          <span v-if="index !== breadcrumbs.length - 1" class="breadcrumb__divider" aria-hidden="true">›</span>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'breadcrumb',
  computed: {
    breadcrumbs () {
      const pathArray = this.$route.path.split('/').filter(function (el) {
        return el !== ''
      })
      console.log(this.$route.matched)
      const breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          path: this.$route.matched[idx].name || path,
          to: breadcrumbArray[idx - 1]
            ? '/' + breadcrumbArray[idx - 1].path + '/' + path
            : '/' + path,
          text: this.$t(this.$route.matched[idx].meta.breadcrumb) || path,
        })
        return breadcrumbArray
      }, [])
      breadcrumbs.shift()
      return breadcrumbs
    },
  },
  methods: {
    getParent (routeName) {

    },
  },
}
</script>

<style lang="scss">
/*
=====
DEPENDENCES
=====
*/

.r-list {
  --uirListPaddingLeft: var(--rListPaddingLeft, 0);
  --uirListMarginTop: var(--rListMarginTop, 0);
  --uirListMarginBottom: var(--rListMarginBottom, 0);
  --uirListListStyle: var(--rListListStyle, none);

  padding-left: var(--uirListPaddingLeft) !important;
  margin-top: var(--uirListMarginTop) !important;
  margin-bottom: var(--uirListMarginBottom) !important;
  list-style: var(--uirListListStyle) !important;
}

.r-link {
  --uirLinkDisplay: var(--rLinkDisplay, inline-flex);
  --uirLinkTextColor: var(--rLinkTextColor);
  --uirLinkTextDecoration: var(--rLinkTextDecoration, none);

  display: var(--uirLinkDisplay) !important;
  color: var(--uirLinkTextColor) !important;
  text-decoration: var(--uirLinkTextDecoration) !important;
}

/*
=====
COMPONENT
=====
*/

.breadcrumb__list {
  display: flex;
  flex-wrap: wrap;
}

.breadcrumb__group {
  display: inline-flex;
  align-items: center;
}

.breadcrumb__group:nth-of-type(n+2) {
  margin-left: var(--uiBreadcrumbIndent);
}

/*
=====
SKIN
=====
*/

.breadcrumb {
  --uiBreadcrumbTextColor: var(--breadcrumbTextColor);
  --uiBreadcrumbTextColorActive: var(--breadcrumbTextColorActive);
  --uiBreadcrumbDividerColor: var(--breadcrumbDividerColor, inherit);
  --uiBreadcrumbDividerSize: var(--breadcrumbDividerSize, 12px);
  --uiBreadcrumbIndent: var(--breadcrumbIndent, 10px);
  --breadcrumbDividerColor: var(--uiBreadcrumbTextColor);
  --rLinkTextColor: var(--uiBreadcrumbTextColor);
}

.breadcrumb__divider {
  color: var(--uiBreadcrumbDividerColor);
  margin-left: var(--uiBreadcrumbIndent);
  font-size: var(--uiBreadcrumbDividerSize);
}

span.breadcrumb__point {
  color: var(--uiBreadcrumbTextColorActive);
}

/*
=====
SETTINGS
=====
*/

:root {
  --breadcrumbTextColor: ##34495e;
  --breadcrumbTextColorActive: #8396a5;
  --breadcrumbBackgroundColor: #ffffff;
}

.breadcrumb_type {
  --breadcrumbDividerSize: 14px;
}

.page__section {
  padding: 0.3rem 1rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  background-color: var(--breadcrumbBackgroundColor);
  color: #34495e;
  border-radius: 0.375rem;
  margin-bottom: 0.375rem;
}

.page__section:nth-of-type(n+2) {
  margin-top: 3rem;
}

</style>
