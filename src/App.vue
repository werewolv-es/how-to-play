<template>
  <div>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" @click="loadSidebar">
            <span class="sr-only">Refresh</span>
            <i class="fa fa-refresh" v-bind:class="{ 'fa-spin': loading.sidebar || loading.guide }"></i>
          </button>
					<div v-show="loading.sidebar || loading.guide" class="navbar-brand">
						<img src="https://werewolv.es/Content/Images/ajax-loader.gif" style="display:inline;" /> ...... loading
					</div>
          <div v-show="!loading.sidebar && !loading.guide">
            <a class="navbar-brand">werewolv.es</a>
            <a href="#guide-info" data-toggle="drawer" data-parent="#navbar" aria-foldedopen="false" class="navbar-button hidden-md hidden-lg">Guide Menu</a>
          </div>
        </div>
			</div>
		</nav>
		<div class="container-fluid" style="margin-bottom: 2em;">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-md-9">
            <div class="background-cover" id="guide" v-html="guide">
              &nbsp;
            </div>
					</div>
					<div class="hidden-xs hidden-sm col-md-3" id="sidebar">
					</div>
          <div id="guide-info" class="drawer drawer-right dw-xs-10 dw-sm-6 dw-md-4 fold">
              <div class="drawer-contents">
                <div class="drawer-heading">
                  <a class="pull-right" href="#guide-info" data-toggle="drawer" aria-controls="drawerExample"><i class="fa fa-close fa-lg"></i></a>
                  <div id="sidebar">
                  </div>
                </div>
                <div class="drawer-body">
                </div>
              </div>
          </div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import Vue from 'vue'
import vueUrlParameters from 'vue-url-parameters';

export default {
  name: 'app',
  mixins: [vueUrlParameters],
  data () {
    return {
      loading: {
        sidebar: false,
        guide: false
      },
      searchParams: {
        guide: null
      },
      guide: null,
      data: null
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.searchParams = this.getFiltersFromUrl(this.searchParams);
      this.loadSidebar();
    });
  },
  methods: {
    loadSidebar: function() {
      this.guide = null;
      document.querySelectorAll('#sidebar').forEach(sidebar => {
        sidebar.innerHTML = '';
      });
      this.loading.sidebar = true;
      this.$http.get('/sidebar').then(response => {
        this.data = response.body;
        var template = document.createElement('div');
        var wrapper = document.createElement('div');
        response.body.forEach(section => createLinks(wrapper, section));
        template.appendChild(wrapper);
        var component = Vue.extend({
          template,
          methods: {
            loadGuide: this.loadGuide
          }
        });
        document.querySelectorAll('#sidebar').forEach(sidebar => {
          var mounted = new component().$mount();
          sidebar.innerHTML = '';
          sidebar.appendChild(mounted.$el)
        });
        if(this.searchParams.guide == null) {
          document.getElementById(response.body[0].guides[0].id).click();
        } else {
          this.loadGuide(this.searchParams.guide);
        }
        this.loading.sidebar = false;
      }, error => {
        this.guide = '<div class="background-cover missing-info">Error loading sidebar.</div>';
        this.loading.sidebar = false;
      });

      function createLinks(wrapper, section) {
        var h4 = document.createElement('h4');
        if(section.template != null) {
          h4.innerHTML = `<a id="${section.id}" @click="loadGuide('${section.id}')" data-template="${section.template}">${section.name}</a>`;
        } else {
          h4.innerHTML = section.name;
        }
        wrapper.appendChild(h4);

        var ul = document.createElement('ul');
        section.guides.forEach(guide => {
          var li = document.createElement('li');
          li.innerHTML = `<a id="${guide.id}" @click="loadGuide('${guide.id}')" data-template="${guide.template}">${guide.name}</a>`;
          ul.appendChild(li);
        });
        wrapper.appendChild(ul);
      }
    },
    loadGuide: function(guide) {
      this.searchParams.guide = guide;
      this.updateUrlHash(this.searchParams);
      this.guide = null;
      this.loading.guide = true;
      var template = document.getElementById(guide).getAttribute('data-template');
      this.$http.get(`/guides/${template}`).then(response => {
        var regex = new RegExp(/@{[\S\s]+?}|@model.*/, 'g');
        var models = [];
        var matches;
        while (matches = regex.exec(response.body)) {
          models.push(matches[0].trim());
        }
        var template = document.createElement('div');
        template.className = 'background-cover';
        template.innerHTML = response.body.replace(regex, '');
        var modelInfo = document.createElement('div');
        modelInfo.className = `background-cover model-info${(models.length > 0 ? '' : 'missing-info')}`;
        modelInfo.innerHTML = models.length > 0 ? models.join('<br/>') : 'Missing model info.';
        this.guide = `<div>${modelInfo.outerHTML}${template.outerHTML}</div>`;
        this.loading.guide = false;
      }, error => {
        this.guide = `<div class="background-cover missing-info">Error loading "${guide}".</div>`;
        this.loading.guide = false;
      });
    }
  }
}
</script>

<style>
a {
  cursor: pointer;
}

.navbar-header {
  width: 100%;
}

.navbar-toggle {
  display: block;
}

.model-info {
  font-family: 'Courier New', Courier, monospace;
  padding-bottom: 0.75em;
  color: white;
  border: 1px solid white;
}

.missing-info {
  background: red;
}
</style>
