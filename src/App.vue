<template>
  <div id="app">
    <nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="container">
				<div class="navbar-header">
          <button type="button" class="navbar-toggle" @click="loadSidebar">
            <span class="sr-only">Refresh</span>
            <i class="fa fa-refresh" v-bind:class="{ 'fa-spin': loading.sidebar || loading.guide }"></i>
          </button>
					<div v-show="loading.sidebar || loading.guide" class="navbar-brand">
						<img src="http://werewolv.es/Content/Images/ajax-loader.gif" style="display:inline;" /> ...... loading
					</div>
					<a v-show="!loading.sidebar && !loading.guide" class="navbar-brand" href="/" style="display: none;">werewolv.es</a>
				</div>
			</div>
		</nav>
		<div class="container-fluid" style="margin-bottom: 2em;">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-md-9" id="guide">
					</div>
					<div class="col-xs-12 col-md-3" id="sidebar">
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'app',
  data () {
    return {
      loading: {
        sidebar: false,
        guide: false
      },
      currentPage: null
    }
  },
  mounted () {
     this.$nextTick(function () {
      this.loadSidebar();
    });
  },
  methods: {
    loadSidebar: function() {
      var guide = document.getElementById('guide');
      guide.innerHTML = '';
      var sidebar = document.getElementById('sidebar');
      sidebar.innerHTML = '';
      this.loading.sidebar = true;
      this.$http.get('/shared/_Sidebar.cshtml').then(response => {
        var template = document.createElement('div');
        template.innerHTML = response.body.replace(/@Html.ActionLink\("(.+)", ("(.+)", new { controller = "Guides" }|"Index", new { .* id = "(.+)" })\)/g, '<a @click="loadGuide(\'$3$4\')">$1</a>');
        [].forEach.call(template.querySelectorAll('script, ins'),function(e){
            e.parentNode.removeChild(e);
        });
        var component = Vue.extend({
          template: template.outerHTML,
          methods: {
            loadGuide: this.loadGuide
          }
        });
        var component = new component().$mount()
        sidebar.innerHTML = '';
        sidebar.appendChild(component.$el)
        if(this.currentPage == null) {
          sidebar.querySelector('li a').click();
        } else {
          this.loadGuide(this.currentPage);
        }
        this.loading.sidebar = false;
      }, error => {
        guide.innerHTML = '<div class="background-cover missing-info">Error loading sidebar...</div>';
        this.loading.sidebar = false;
      });
    },
    loadGuide: function(page) {
      var guide = document.getElementById('guide');
      guide.innerHTML = '';
      this.loading.guide = true;
      this.$http.get('/guides/' + page + '.cshtml').then(response => {
        var regex = new RegExp(/@{[\S\s]*}|@.*/, 'g');
        var models = [];
        var matches;
        while (matches = regex.exec(response.body)) {
          models.push(matches[0].trim());
        }
        var template = document.createElement('div');
        template.className = 'background-cover';
        template.innerHTML = response.body;
        template.innerHTML = template.innerHTML.replace(regex, '');
        var modelInfo = document.createElement('div');
        modelInfo.className = 'background-cover model-info' + (models.length > 0 ? '' : 'missing-info');
        modelInfo.innerHTML = models.length > 0 ? models.join('<br/>') : 'Missing model info.';
        var component = Vue.extend({
          template: '<div>' + modelInfo.outerHTML + template.outerHTML + '</div>'
        });
        var component = new component().$mount();
        guide.innerHTML = '';
        guide.appendChild(component.$el);
        this.currentPage = page;
        this.loading.guide = false;
      }, error => {
        guide.innerHTML = '<div class="background-cover missing-info">Error loading ' + page + '...</div>';
        this.currentPage = null;
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
