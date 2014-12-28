(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Chase_Zhang/codes/pages/sketch-rendering/coffee/main.coffee":[function(require,module,exports){
var SceneManager, element, manager;

SceneManager = require('./scene_manager');

element = document.getElementById('container');

manager = new SceneManager(element, 'test');

manager.render();



},{"./scene_manager":"/Users/Chase_Zhang/codes/pages/sketch-rendering/coffee/scene_manager.coffee"}],"/Users/Chase_Zhang/codes/pages/sketch-rendering/coffee/scene_manager.coffee":[function(require,module,exports){
var SceneManager, SketchMaterial;

SketchMaterial = require('./sketch_material');

SceneManager = (function() {
  SceneManager.prototype.camera = new THREE.PerspectiveCamera(45, 1, 1, 15);

  SceneManager.prototype.renderer = new THREE.WebGLRenderer({
    antialias: true
  });

  SceneManager.prototype.scene = new THREE.Scene();

  SceneManager.prototype.depthMaterial = new THREE.MeshDepthMaterial();

  SceneManager.prototype.normalMaterial = new THREE.MeshNormalMaterial();

  SceneManager.prototype.sketchMaterial = new SketchMaterial();

  function SceneManager(element, scenename) {
    this.scenename = scenename;
    this.renderer.setSize(element.clientWidth, element.clientHeight);
    this.sketchMaterial.initTextures(element.clientWidth, element.clientWidth);
    this.initCamera(this.scenename);
    switch (this.scenename) {
      case 'test':
        this.initTestScene();
        break;
    }
    element.appendChild(this.renderer.domElement);
  }

  SceneManager.prototype.initCamera = function(scenename) {
    switch (scenename) {
      case 'test':
        this.camera.position.z = 10;
        this.camera.position.x = 3;
        this.camera.position.y = 3;
        return this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    }
  };

  SceneManager.prototype.initTestScene = function() {
    var boxGeometry, boxMesh, sphereGeometry, sphereMesh;
    boxGeometry = new THREE.BoxGeometry(2, 2, 2);
    sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    boxMesh = new THREE.Mesh(boxGeometry);
    sphereMesh = new THREE.Mesh(sphereGeometry);
    boxMesh.position.x = 1;
    sphereMesh.position.x = -1;
    this.scene.add(boxMesh);
    this.scene.add(sphereMesh);
    return this.scene.overrideMaterial = this.normalMaterial;
  };

  SceneManager.prototype.render = function() {
    return this.renderer.render(this.scene, this.camera);
  };

  return SceneManager;

})();

module.exports = SceneManager;



},{"./sketch_material":"/Users/Chase_Zhang/codes/pages/sketch-rendering/coffee/sketch_material.coffee"}],"/Users/Chase_Zhang/codes/pages/sketch-rendering/coffee/sketch_material.coffee":[function(require,module,exports){
var SketchMaterial,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

SketchMaterial = (function(_super) {
  __extends(SketchMaterial, _super);

  SketchMaterial.prototype.depthTexture = null;

  SketchMaterial.prototype.normalTexture = null;

  SketchMaterial.prototype.attributes = {};

  SketchMaterial.prototype.uniforms = {};

  SketchMaterial.prototype.vertexShader = '';

  SketchMaterial.prototype.fragmentShader = '';

  SketchMaterial.prototype.initTextures = function(width, height) {
    this.depthTexture = new THREE.WebGLRenderTarget(width, height);
    return this.normalTexture = new THREE.WebGLRenderTarget(width, height);
  };

  function SketchMaterial() {
    SketchMaterial.__super__.constructor.call(this, {
      attributes: this.attributes,
      uniforms: this.uniforms,
      vertexShader: this.vertexShader,
      fragmentShader: this.fragmentShader
    });
  }

  return SketchMaterial;

})(THREE.ShaderMaterial);

module.exports = SketchMaterial;



},{}]},{},["/Users/Chase_Zhang/codes/pages/sketch-rendering/coffee/main.coffee"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy5udm0vdjAuMTAuMjkvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL0NoYXNlX1poYW5nL2NvZGVzL3BhZ2VzL3NrZXRjaC1yZW5kZXJpbmcvY29mZmVlL21haW4uY29mZmVlIiwiL1VzZXJzL0NoYXNlX1poYW5nL2NvZGVzL3BhZ2VzL3NrZXRjaC1yZW5kZXJpbmcvY29mZmVlL3NjZW5lX21hbmFnZXIuY29mZmVlIiwiL1VzZXJzL0NoYXNlX1poYW5nL2NvZGVzL3BhZ2VzL3NrZXRjaC1yZW5kZXJpbmcvY29mZmVlL3NrZXRjaF9tYXRlcmlhbC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBLDhCQUFBOztBQUFBLFlBQUEsR0FBZSxPQUFBLENBQVEsaUJBQVIsQ0FBZixDQUFBOztBQUFBLE9BRUEsR0FBVSxRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixDQUZWLENBQUE7O0FBQUEsT0FHQSxHQUFjLElBQUEsWUFBQSxDQUFhLE9BQWIsRUFBc0IsTUFBdEIsQ0FIZCxDQUFBOztBQUFBLE9BSU8sQ0FBQyxNQUFSLENBQUEsQ0FKQSxDQUFBOzs7OztBQ0FBLElBQUEsNEJBQUE7O0FBQUEsY0FBQSxHQUFpQixPQUFBLENBQVEsbUJBQVIsQ0FBakIsQ0FBQTs7QUFBQTtBQUdFLHlCQUFBLE1BQUEsR0FBWSxJQUFBLEtBQUssQ0FBQyxpQkFBTixDQUF3QixFQUF4QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxFQUFsQyxDQUFaLENBQUE7O0FBQUEseUJBQ0EsUUFBQSxHQUFjLElBQUEsS0FBSyxDQUFDLGFBQU4sQ0FBb0I7QUFBQSxJQUFBLFNBQUEsRUFBVyxJQUFYO0dBQXBCLENBRGQsQ0FBQTs7QUFBQSx5QkFFQSxLQUFBLEdBQVcsSUFBQSxLQUFLLENBQUMsS0FBTixD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Q0ExQ1IsQ0FBQTs7c0JBQUE7O0lBSEYsQ0FBQTs7QUFBQSxNQWdETSxDQUFDLE9BQVAsR0FBaUIsWUFoRGpCLENBQUE7Ozs7O0FDQUEsSUFBQSxjQUFBO0VBQUE7aVNBQUE7O0FBQUE7QUFDRSxtQ0FBQSxDQUFBOztBQUFBLDJCQUFBLFlBQUEsR0FBYyxJQUFkLENBQUE7O0FBQUEsMkJBQ0EsYUFBQSxHQUFlLElBRGYsQ0FBQTs7QUFBQSwyQkFFQSxVQUFBLEdBQVksRUFGWixDQUFBOztBQUFBLDJCQUdBLFFBQUEsR0FBVSxFQUhWLENBQUE7O0FBQUEsMkJBSUEsWUFBQSxHQUFjLEVBSmQsQ0FBQTs7QUFBQSwyQkFNQSxjQUFBLEdBQWdCLEVBTmhCLENBQUE7O0FBQUEsMkJBU0EsWUFBQSxHQUFjLFNBQUMsS0FBRCxFQUFRLE1BQVIsR0FBQTtBQUNaLElBQUEsSUFBQyxDQUFBLFlBQUQsR0FBb0IsSUFBQSxLQUFLLENBQUMsaUJBQU4sQ0FBd0IsS0FBeEIsRUFBK0IsTUFBL0IsQ0FBcEIsQ0FBQTtXQUNBLElBQUMsQ0FBQSxhQUFELEdBQXFCLElBQUEsS0FBSyxDQUFDLGlCQUFOLENBQXdCLEtBQXhCLEVBQStCLE1BQS9CLEVBRlQ7RUFBQSxDQVRkLENBQUE7O0FBYWEsRUFBQSx3QkFBQSxHQUFBO0FBQ1gsSUFBQSxnREFDRTtBQUFBLE1BQUEsVUFBQSxFQUFZLElBQUMsQ0FBQSxVQUFiO0FBQUEsTUFDQSxRQUFBLEVBQVUsSUFBQyxDQUFBLFFBRFg7QUFBQSxNQUVBLFlBQUEsRUFBYyxJQUFDLENBQUEsWUFGZjtBQUFBLE1BR0EsY0FBQSxFQUFnQixJQUFDLENBQUEsY0FIakI7S0FERixDQUFBLENBRFc7RUFBQSxDQWJiOzt3QkFBQTs7R0FEMkIsS0FBSyxDQUFDLGVBQW5DLENBQUE7O0FBQUEsTUFzQk0sQ0FBQyxPQUFQLEdBQWlCLGNBdEJqQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlNjZW5lTWFuYWdlciA9IHJlcXVpcmUgJy4vc2NlbmVfbWFuYWdlcidcblxuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICdjb250YWluZXInXG5tYW5hZ2VyID0gbmV3IFNjZW5lTWFuYWdlcihlbGVtZW50LCAndGVzdCcpXG5tYW5hZ2VyLnJlbmRlcigpXG4iLCJTa2V0Y2hNYXRlcmlhbCA9IHJlcXVpcmUgJy4vc2tldGNoX21hdGVyaWFsJ1xuXG5jbGFzcyBTY2VuZU1hbmFnZXJcbiAgY2FtZXJhOiBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIDEsIDEsIDE1KVxuICByZW5kZXJlcjogbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoYW50aWFsaWFzOiB0cnVlKVxuICBzY2VuZTogbmV3IFRIUkVFLlNjZW5lKClcbiAgZGVwdGhNYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hEZXB0aE1hdGVyaWFsKClcbiAgbm9ybWFsTWF0ZXJpYWw6IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoKVxuICBza2V0Y2hNYXRlcmlhbDogbmV3IFNrZXRjaE1hdGVyaWFsKClcblxuICBjb25zdHJ1Y3RvcjogKGVsZW1lbnQsIEBzY2VuZW5hbWUpIC0+XG4gICAgQHJlbmRlcmVyLnNldFNpemUoZWxlbWVudC5jbGllbnRXaWR0aCwgZWxlbWVudC5jbGllbnRIZWlnaHQpXG4gICAgQHNrZXRjaE1hdGVyaWFsLmluaXRUZXh0dXJlcyhlbGVtZW50LmNsaWVudFdpZHRoLCBlbGVtZW50LmNsaWVudFdpZHRoKVxuICAgIEBpbml0Q2FtZXJhKEBzY2VuZW5hbWUpXG4gICAgc3dpdGNoIEBzY2VuZW5hbWVcbiAgICAgIHdoZW4gJ3Rlc3QnXG4gICAgICAgIEBpbml0VGVzdFNjZW5lKClcbiAgICAgIGVsc2VcbiAgICAgICAgXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCBAcmVuZGVyZXIuZG9tRWxlbWVudFxuXG4gIGluaXRDYW1lcmE6IChzY2VuZW5hbWUpIC0+XG4gICAgc3dpdGNoIHNjZW5lbmFtZVxuICAgICAgd2hlbiAndGVzdCdcbiAgICAgICAgQGNhbWVyYS5wb3NpdGlvbi56ID0gMTBcbiAgICAgICAgQGNhbWVyYS5wb3NpdGlvbi54ID0gM1xuICAgICAgICBAY2FtZXJhLnBvc2l0aW9uLnkgPSAzXG4gICAgICAgIEBjYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKVxuICAgICAgZWxzZVxuICAgICAgICAjIFRPRE86IG90aGVyIHNjZW5lXG5cbiAgaW5pdFRlc3RTY2VuZTogLT5cbiAgICBib3hHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLCAyLCAyKVxuICAgIHNwaGVyZUdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDIsIDMyLCAzMilcbiAgICBcbiAgICBib3hNZXNoID0gbmV3IFRIUkVFLk1lc2goYm94R2VvbWV0cnkpXG4gICAgc3BoZXJlTWVzaCA9IG5ldyBUSFJFRS5NZXNoKHNwaGVyZUdlb21ldHJ5KVxuXG4gICAgYm94TWVzaC5wb3NpdGlvbi54ID0gMVxuICAgIHNwaGVyZU1lc2gucG9zaXRpb24ueCA9IC0xXG5cbiAgICBAc2NlbmUuYWRkKGJveE1lc2gpXG4gICAgQHNjZW5lLmFkZChzcGhlcmVNZXNoKVxuICAgIEBzY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gQG5vcm1hbE1hdGVyaWFsXG5cbiAgcmVuZGVyOiAtPlxuICAgIEByZW5kZXJlci5yZW5kZXIoQHNjZW5lLCBAY2FtZXJhKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lTWFuYWdlclxuIiwiY2xhc3MgU2tldGNoTWF0ZXJpYWwgZXh0ZW5kcyBUSFJFRS5TaGFkZXJNYXRlcmlhbFxuICBkZXB0aFRleHR1cmU6IG51bGxcbiAgbm9ybWFsVGV4dHVyZTogbnVsbFxuICBhdHRyaWJ1dGVzOiB7fVxuICB1bmlmb3Jtczoge31cbiAgdmVydGV4U2hhZGVyOiAnJydcbiAgJycnXG4gIGZyYWdtZW50U2hhZGVyOiAnJydcbiAgJycnXG5cbiAgaW5pdFRleHR1cmVzOiAod2lkdGgsIGhlaWdodCkgLT5cbiAgICBAZGVwdGhUZXh0dXJlID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KHdpZHRoLCBoZWlnaHQpXG4gICAgQG5vcm1hbFRleHR1cmUgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQod2lkdGgsIGhlaWdodClcblxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBzdXBlcihcbiAgICAgIGF0dHJpYnV0ZXM6IEBhdHRyaWJ1dGVzXG4gICAgICB1bmlmb3JtczogQHVuaWZvcm1zXG4gICAgICB2ZXJ0ZXhTaGFkZXI6IEB2ZXJ0ZXhTaGFkZXJcbiAgICAgIGZyYWdtZW50U2hhZGVyOiBAZnJhZ21lbnRTaGFkZXJcbiAgICApXG5cbm1vZHVsZS5leHBvcnRzID0gU2tldGNoTWF0ZXJpYWxcbiJdfQ==