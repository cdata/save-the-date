class Donna {
  constructor () {
    var mesh = new THREE.Mesh(
      this.geometry,
      this.material
    );

    mesh.rotation.x = Math.PI / 2;
    mesh.position.z = this.scaledHeight / 2;
    mesh.position.x = -this.scaledWidth / 4;
    mesh.position.y = 14.5;

    mesh.origin = mesh.position.clone();

    return mesh;
  }

  get material () {
    let material = new THREE.MeshBasicMaterial({
      map: window.textureCache.getTexture('./donna.png'),
      wireframe: false
    });

    material.transparent = true;

    return material;
  }

  get geometry () {
    return new THREE.PlaneBufferGeometry(this.scaledWidth, this.scaledHeight);
  }

  get scaledWidth () {
    return this.width / this.scalar;
  }

  get scaledHeight () {
    return this.height / this.scalar;
  }

  get width () {
    return 4096;
  }

  get height () {
    return 4096;
  }

  get scalar () {
    return 1024;
  }
}
