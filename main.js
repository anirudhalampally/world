 // revolutions per second
	var cameravar=0;
      var angularSpeed = 0; 
      var lastTime = 0;
 var xyz=0;
 var ballpos=0;
 var add=20;
      // this function is executed on each animation frame
      function animate(){
        // update
		xyz+=1;
        var time = (new Date()).getTime();
        var timeDiff = time - lastTime;
        var angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
        plane.rotation.z += angleChange;
		cube.rotation.z += angleChange;
		sphere.rotateOnAxis(new THREE.Vector3(0, 1, 1), xyz*(Math.PI/180));
		sphere1.rotateOnAxis(new THREE.Vector3(0, 0, 1), xyz*(Math.PI/180));
		
		sphere.rotation.x+=xyz;
		cube1.rotation.z += angleChange;
		cube2.rotation.z += angleChange;
		pyramid.rotation.y += angleChange;
		
		ballpos+=add;
		sphere.position.y=ballpos;
		lightss.position.y=ballpos;
		sphere1.position.y=-ballpos;
		lightss1.position.y=-ballpos;
		//meshh.position.y=ballpos;
		
		if(ballpos>2000)
		{
		//alert(ballpos);
			add*=-1;
		}
		if(ballpos<-2000)
		{
			add*=-1;
		}
		
		
		
	//	cylinder.rotation.y += angleChange;
        lastTime = time;
 
        // render
		render();

      
      //   request new frame
        requestAnimationFrame(function(){
            animate();
        });
		render();
	controls.update();
      }
	  
	  
	  
	function render(){
		//controls.update();
		renderer.render(scene, camera);
// 	render();
}


	  
	  
	  document.addEventListener("keydown",onDocumentKeyDown,false);
      function onDocumentKeyDown(event){
                 // Get the key code of the pressed key
                var keycode = event.which;
				if (keycode == 87)
				{
					camera.position.y+=50;
					camera.updateProjectionMatrix();
				}
				if (keycode == 65)
				{
					camera.position.x-=50;
					camera.updateProjectionMatrix();
				}
				if (keycode == 83)
				{
					camera.position.y-=50;
					camera.updateProjectionMatrix();
				}
				if (keycode == 68)
				{
					camera.position.x+=50;
					camera.updateProjectionMatrix();
				}
				if (keycode == 81)
				{
					camera.position.z+=50;
					camera.updateProjectionMatrix();
				}
				if (keycode == 90)
				{
					camera.position.z-=50;
					camera.updateProjectionMatrix();
				}
				if (keycode == 74)
				{
					meshh.rotation.z+=1*(Math.PI/180);
					meshh.updateProjectionMatrix();
				}
				if (keycode == 76)
				{
					meshh.rotation.z-=1*(Math.PI/180);
					meshh.updateProjectionMatrix();
				}
				if (keycode == 72)
				{
					xx=meshh.rotation.y;
					meshh.rotation.y-=1*(Math.PI/180);
					meshh.updateProjectionMatrix();
				}
				if (keycode == 77)
				{
					xx=meshh.rotation.y;
					
					meshh.rotation.y+=1*(Math.PI/180);
					meshh.updateProjectionMatrix();
				}
				if (keycode == 73)
				{
					meshh.position.y-=50;
					meshh.updateProjectionMatrix();
				}
				if (keycode == 75)
				{
					meshh.position.y+=50;
					meshh.updateProjectionMatrix();
				}
				else if (keycode == 67)
				{
		//		alert("sda");
						cameravar+=1;
						cameravar%=3;
						if(cameravar==1){
	
						camera.position.x=0;
						camera.position.y=0;
						camera.position.z=4000;
						camera.rotation.x=90*(Math.PI/180);
					//	alert("aaa");
					}
					else if(cameravar==0){
						camera.position.x=0;
					  camera.position.y = -4950;
					  camera.position.z = 700;
					  camera.rotation.x = 80 * (Math.PI / 180);
					  }
					  else if(cameravar==2){
					  camera.position.x = 5000;
					  camera.position.y = 100;
					  camera.position.z = 1000;
					  
					  camera.rotation.x = 0 * (Math.PI / 180);
					  camera.rotation.z = 90 * (Math.PI / 180);
					  camera.rotation.y = 90 * (Math.PI / 180);
			//		  camera.rotation.x = 180 * (Math.PI / 180);
				 }
								}
								
 
		}

		
		
		
		
      // renderer
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
 
      // camera
      var camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 100000);
      if(cameravar==0){
	  camera.position.y = -4950;
      camera.position.z = 400;
      camera.rotation.x = 80 * (Math.PI / 180);
 }
	
 
	
	  
      // scene
	  var controls;
	  controls = new THREE.TrackballControls( camera);
	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 5.0;
	controls.panSpeed = 0.8;

	controls.noZoom = false;
	controls.noPan = false;

	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;

	controls.keys = [ 65, 83, 68 ];

	controls.addEventListener( 'change', render );
	    
	  
	  
	  
	  
	  
	  
	  
      var scene = new THREE.Scene();
 
 
// controls = new THREE.OrbitControls( camera );
	  	  
	//  controls.addEventListener( 'change', updateControls );

	   //function updateControls() {
            

    //  controls.update();
   // }
 
 var materialsx = [

					new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'px.jpg' ), overdraw: true } ), // right
					new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'nx.jpg' ), overdraw: true } ), // left
					new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'py.jpg' ), overdraw: true } ), // top
					new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'ny.jpg' ), overdraw: true } ), // bottom
					new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'pz.jpg' ), overdraw: true } ), // back
					new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'nz.jpg' ), overdraw: true } )  // front

				];

				mesh1 = new THREE.Mesh( new THREE.BoxGeometry( 10000, 7000, 3500, 5, 5, 5 ), new THREE.MeshFaceMaterial( materialsx ) );
				mesh1.scale.x = -1;
				scene.add(mesh1);
 
 
 
 
	 var material2 = new THREE.MeshLambertMaterial({
			map: THREE.ImageUtils.loadTexture('./base.jpg')
		  });
 
      // plane
      var plane = new THREE.Mesh(new THREE.PlaneGeometry(5500, 5500),material2);
      plane.overdraw = true;
	  plane.rotation.x = 0 *(Math.PI/180);
      scene.add(plane);
 
 
	var material = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./buil.jpg')
      });
	  
	  //cube
	  //var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 300,250), new THREE.MeshNormalMaterial());
	  var cube = new THREE.Mesh(new THREE.CubeGeometry(550, 500,450), material);
      cube.overdraw = true;
	  cube.position.z=225;
	  cube.castShadow = true;
      scene.add(cube);
 var material = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./buil.jpg')
      });
 //cube
	  //var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 300,250), new THREE.MeshNormalMaterial());
	  var cube1 = new THREE.Mesh(new THREE.CubeGeometry(400, 350,425), material);
      cube1.overdraw = true;
	  cube1.position.z=665;
	  cube1.castShadow = true;
      scene.add(cube1);
 //cube
	  //var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 300,250), new THREE.MeshNormalMaterial());
	  var cube2 = new THREE.Mesh(new THREE.CubeGeometry(300, 250,300), material);
      cube2.overdraw = true;
	  cube2.position.z=1015;
	  cube2.castShadow = true;
      scene.add(cube2);
 
 
	var materialy = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./yel.jpg')
		  });
 
			var pyramidgeometry = new THREE.CylinderGeometry(80, 120, 300, 250, false);
			var pyramidmaterial = new THREE.MeshBasicMaterial({wireframe: true, color: 0x000000});
			var pyramid = new THREE.Mesh(pyramidgeometry, materialy);
			//pyramid.position.set(-4.0,0,0);
			pyramid.rotation.x=90*(Math.PI/180);
			pyramid.position.z=1320;
			scene.add(pyramid);
 
 
		var pyramidgeometry1 = new THREE.CylinderGeometry(30, 30, 300, 250, false);
			var pyramidmaterial1 = new THREE.MeshBasicMaterial({wireframe: true, color: 0x000000});
			var pyramid1 = new THREE.Mesh(pyramidgeometry1, materialy);
			//pyramid.position.set(-4.0,0,0);
			pyramid1.rotation.x=90*(Math.PI/180);
			pyramid1.position.z=1520;
			scene.add(pyramid1);
	
 
 
 
 
 
 
 var material = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./buil.jpg')
      });
	  
	  //cube
	  //var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 300,250), new THREE.MeshNormalMaterial());
	  var cube12 = new THREE.Mesh(new THREE.CubeGeometry(550, 500,450), material);
      cube12.overdraw = true;
	  cube12.position.z=225;
	  cube12.position.y=1500;
	  cube12.castShadow = true;
      scene.add(cube12);
 var material = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./buil.jpg')
      });
 //cube
	  //var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 300,250), new THREE.MeshNormalMaterial());
	  var cube112 = new THREE.Mesh(new THREE.CubeGeometry(400, 350,425), material);
      cube112.overdraw = true;
	  cube112.position.z=665;
	  cube112.position.y=1500;
	  cube112.castShadow = true;
      scene.add(cube112);
 //cube
	  //var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 300,250), new THREE.MeshNormalMaterial());
	  var cube212 = new THREE.Mesh(new THREE.CubeGeometry(300, 250,300), material);
      cube212.overdraw = true;
	  cube212.position.z=1015;
	  cube212.position.y=1500;
	  cube212.castShadow = true;
      scene.add(cube212);
 
 
	var materialy = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./yel.jpg')
		  });
 
			var pyramidgeometry12 = new THREE.CylinderGeometry(80, 120, 300, 250, false);
			var pyramidmaterial12 = new THREE.MeshBasicMaterial({wireframe: true, color: 0x000000});
			var pyramid12 = new THREE.Mesh(pyramidgeometry, materialy);
			//pyramid.position.set(-4.0,0,0);
			pyramid12.rotation.x=90*(Math.PI/180);
			pyramid12.position.y=1500;
			pyramid12.position.z=1320;
			scene.add(pyramid12);
 
 
		var pyramidgeometry1 = new THREE.CylinderGeometry(30, 30, 300, 250, false);
			var pyramidmaterial1 = new THREE.MeshBasicMaterial({wireframe: true, color: 0x000000});
			var pyramid1 = new THREE.Mesh(pyramidgeometry1, materialy);
			//pyramid.position.set(-4.0,0,0);
			pyramid1.rotation.x=90*(Math.PI/180);
			pyramid1.position.y=1500;
			pyramid1.position.z=1520;
			scene.add(pyramid1);
	
 
 
 
 
 
 
 var material = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./buil.jpg')
      });
	  
	  //cube
	  //var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 300,250), new THREE.MeshNormalMaterial());
	  var cube12 = new THREE.Mesh(new THREE.CubeGeometry(550, 500,450), material);
      cube12.overdraw = true;
	  cube12.position.z=225;
	  cube12.position.y=-1500;
	  cube12.castShadow = true;
      scene.add(cube12);
 var material = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./buil.jpg')
      });
 //cube
	  //var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 300,250), new THREE.MeshNormalMaterial());
	  var cube112 = new THREE.Mesh(new THREE.CubeGeometry(400, 350,425), material);
      cube112.overdraw = true;
	  cube112.position.z=665;
	  cube112.position.y=-1500;
	  cube112.castShadow = true;
      scene.add(cube112);
 //cube
	  //var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 300,250), new THREE.MeshNormalMaterial());
	  var cube212 = new THREE.Mesh(new THREE.CubeGeometry(300, 250,300), material);
      cube212.overdraw = true;
	  cube212.position.z=1015;
	  cube212.position.y=-1500;
	  cube212.castShadow = true;
      scene.add(cube212);
 
 
	var materialy = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./yel.jpg')
		  });
 
			var pyramidgeometry12 = new THREE.CylinderGeometry(80, 120, 300, 250, false);
			var pyramidmaterial12 = new THREE.MeshBasicMaterial({wireframe: true, color: 0x000000});
			var pyramid12 = new THREE.Mesh(pyramidgeometry, materialy);
			//pyramid.position.set(-4.0,0,0);
			pyramid12.rotation.x=90*(Math.PI/180);
			pyramid12.position.y=-1500;
			pyramid12.position.z=1320;
			scene.add(pyramid12);
 
 
		var pyramidgeometry1 = new THREE.CylinderGeometry(30, 30, 300, 250, false);
			var pyramidmaterial1 = new THREE.MeshBasicMaterial({wireframe: true, color: 0x000000});
			var pyramid1 = new THREE.Mesh(pyramidgeometry1, materialy);
			//pyramid.position.set(-4.0,0,0);
			pyramid1.rotation.x=90*(Math.PI/180);
			pyramid1.position.y=-1500;
			pyramid1.position.z=1520;
			scene.add(pyramid1);
	
 
 
 ////////////////////////////////////////

 ////////////////////////////////////////
 	var material = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./buil.jpg')
      });
	  
	  //cube
	  //var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 300,250), new THREE.MeshNormalMaterial());
	  var cube = new THREE.Mesh(new THREE.CubeGeometry(550, 500,450), material);
      cube.overdraw = true;
	  cube.position.z=225;
	  cube.position.x=-1000;
	  cube.castShadow = true;
      scene.add(cube);
 var material = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./buil.jpg')
      });
 //cube
	  //var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 300,250), new THREE.MeshNormalMaterial());
	  var cube1 = new THREE.Mesh(new THREE.CubeGeometry(400, 350,425), material);
      cube1.overdraw = true;
	  cube1.position.z=665;
	  cube1.position.x=-1000;
	  cube1.castShadow = true;
      scene.add(cube1);
 //cube
	  //var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 300,250), new THREE.MeshNormalMaterial());
	  var cube2 = new THREE.Mesh(new THREE.CubeGeometry(300, 250,300), material);
      cube2.overdraw = true;
	  cube2.position.z=1015;
	  cube2.position.x=-1000;
	  cube2.castShadow = true;
      scene.add(cube2);
 
 
	var materialy = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./yel.jpg')
		  });
 
			var pyramidgeometry = new THREE.CylinderGeometry(80, 120, 300, 250, false);
			var pyramidmaterial = new THREE.MeshBasicMaterial({wireframe: true, color: 0x000000});
			var pyramid = new THREE.Mesh(pyramidgeometry, materialy);
			//pyramid.position.set(-4.0,0,0);
			pyramid.rotation.x=90*(Math.PI/180);
			pyramid.position.x=-1000;
			pyramid.position.z=1320;
			scene.add(pyramid);
 
 
		var pyramidgeometry1 = new THREE.CylinderGeometry(30, 30, 300, 250, false);
			var pyramidmaterial1 = new THREE.MeshBasicMaterial({wireframe: true, color: 0x000000});
			var pyramid1 = new THREE.Mesh(pyramidgeometry1, materialy);
			//pyramid.position.set(-4.0,0,0);
			pyramid1.rotation.x=90*(Math.PI/180);
			pyramid1.position.z=1520;
			pyramid1.position.x=-1000;
			scene.add(pyramid1);
	
 
 
 
 
 
 
 var material = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./buil.jpg')
      });
	  
	  //cube
	  //var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 300,250), new THREE.MeshNormalMaterial());
	  var cube12 = new THREE.Mesh(new THREE.CubeGeometry(550, 500,450), material);
      cube12.overdraw = true;
	  cube12.position.z=225;
	  cube12.position.y=1500;
	  cube12.position.x=-1000;
	  cube12.castShadow = true;
      scene.add(cube12);
 var material = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./buil.jpg')
      });
 //cube
	  //var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 300,250), new THREE.MeshNormalMaterial());
	  var cube112 = new THREE.Mesh(new THREE.CubeGeometry(400, 350,425), material);
      cube112.overdraw = true;
	  cube112.position.z=665;
	  cube112.position.x=-1000;
	  cube112.position.y=1500;
	  cube112.castShadow = true;
      scene.add(cube112);
 //cube
	  //var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 300,250), new THREE.MeshNormalMaterial());
	  var cube212 = new THREE.Mesh(new THREE.CubeGeometry(300, 250,300), material);
      cube212.overdraw = true;
	  cube212.position.z=1015;
	  cube212.position.x=-1000;
	  cube212.position.y=1500;
	  cube212.castShadow = true;
      scene.add(cube212);
 
 
	var materialy = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./yel.jpg')
		  });
 
			var pyramidgeometry12 = new THREE.CylinderGeometry(80, 120, 300, 250, false);
			var pyramidmaterial12 = new THREE.MeshBasicMaterial({wireframe: true, color: 0x000000});
			var pyramid12 = new THREE.Mesh(pyramidgeometry, materialy);
			//pyramid.position.set(-4.0,0,0);
			pyramid12.rotation.x=90*(Math.PI/180);
			pyramid12.position.y=1500;
			pyramid12.position.x=-1000;
			pyramid12.position.z=1320;
			scene.add(pyramid12);
 
 
		var pyramidgeometry1 = new THREE.CylinderGeometry(30, 30, 300, 250, false);
			var pyramidmaterial1 = new THREE.MeshBasicMaterial({wireframe: true, color: 0x000000});
			var pyramid1 = new THREE.Mesh(pyramidgeometry1, materialy);
			//pyramid.position.set(-4.0,0,0);
			pyramid1.rotation.x=90*(Math.PI/180);
			pyramid1.position.x=-1000;
			pyramid1.position.y=1500;
			pyramid1.position.z=1520;
			scene.add(pyramid1);
	
 
 
 
 
 
 
 var material = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./buil.jpg')
      });
	  
	  //cube
	  //var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 300,250), new THREE.MeshNormalMaterial());
	  var cube12 = new THREE.Mesh(new THREE.CubeGeometry(550, 500,450), material);
      cube12.overdraw = true;
	  cube12.position.z=225;
	  cube12.position.x=-1000;
	  cube12.position.y=-1500;
	  cube12.castShadow = true;
      scene.add(cube12);
 var material = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./buil.jpg')
      });
 //cube
	  //var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 300,250), new THREE.MeshNormalMaterial());
	  var cube112 = new THREE.Mesh(new THREE.CubeGeometry(400, 350,425), material);
      cube112.overdraw = true;
	  cube112.position.z=665;
	  cube112.position.x=-1000;
	  cube112.position.y=-1500;
	  cube112.castShadow = true;
      scene.add(cube112);
 //cube
	  //var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 300,250), new THREE.MeshNormalMaterial());
	  var cube212 = new THREE.Mesh(new THREE.CubeGeometry(300, 250,300), material);
      cube212.overdraw = true;
	  cube212.position.z=1015;
	  cube212.position.x=-1000;
	  cube212.position.y=-1500;
	  cube212.castShadow = true;
      scene.add(cube212);
 
 
	var materialy = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./yel.jpg')
		  });
 
			var pyramidgeometry12 = new THREE.CylinderGeometry(80, 120, 300, 250, false);
			var pyramidmaterial12 = new THREE.MeshBasicMaterial({wireframe: true, color: 0x000000});
			var pyramid12 = new THREE.Mesh(pyramidgeometry, materialy);
			//pyramid.position.set(-4.0,0,0);
			pyramid12.rotation.x=90*(Math.PI/180);
			pyramid12.position.x=-1000;
			pyramid12.position.y=-1500;
			pyramid12.position.z=1320;
			scene.add(pyramid12);
 
 
		var pyramidgeometry1 = new THREE.CylinderGeometry(30, 30, 300, 250, false);
			var pyramidmaterial1 = new THREE.MeshBasicMaterial({wireframe: true, color: 0x000000});
			var pyramid1 = new THREE.Mesh(pyramidgeometry1, materialy);
			//pyramid.position.set(-4.0,0,0);
			pyramid1.rotation.x=90*(Math.PI/180);
			pyramid1.position.y=-1500;
			pyramid1.position.z=1520;
			pyramid1.position.x=-1000;
			scene.add(pyramid1);
	
 
 
 
 
 
 // Rectangle

				var rectLength = 1200, rectWidth = 4000;

				var rectShape = new THREE.Shape();
				rectShape.moveTo( 0,0 );
				rectShape.lineTo( 0, rectWidth );
				rectShape.lineTo( rectLength, rectWidth );
				rectShape.lineTo( rectLength, 0 );
				rectShape.lineTo( 0, 0 );

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 var materialh = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./horse.jpg')
		  });
 
		var loader = new THREE.JSONLoader( true );
				loader.load( "horse.js", function( geometry ) {

					meshh = new THREE.Mesh( geometry, materialy );
					meshh.scale.set( 3, 3, 3 );
					meshh.position.x=1000;
					meshh.rotation.x=90*(Math.PI/180);
					scene.add( meshh );
					meshh.castShadow = true;
					meshh.receiveshadow=true;
					animation = new THREE.MorphAnimation( meshh );
					animation.play();
					

				} );
				
			
				
		var loader1 = new THREE.JSONLoader();
				loader1.load( "flamingo.js", function( geometry ) {

					//morphColorsToFaceColors( geometry );
					//geometry.computeMorphNormals();

					var material2 = new THREE.MeshLambertMaterial( { color: 0xffffff, morphTargets: true, morphNormals: true, vertexColors: THREE.FaceColors, shading: THREE.FlatShading } );
					var meshAnim = new THREE.MorphAnimMesh( geometry, material );

					//meshAnim.duration = 5000;

					meshAnim.scale.set( 2, 2, 2 );
					meshAnim.position.x=-2000;
					meshAnim.rotation.x=90*(Math.PI/180);
					meshAnim.position.z = 1000;

					scene.add( meshAnim );
					morphs.push( meshAnim );

				} );

 
 
 
	var directionalLight = new THREE.DirectionalLight( 0xffffff, 5 );
	directionalLight.position.set( -100, 10, 10 );
	scene.add( directionalLight );
	// add subtle ambient lighting
      var ambientLight = new THREE.AmbientLight(0xbbbbbb);
      scene.add(ambientLight);
      
      // directional lighting
      var directionalLight = new THREE.DirectionalLight(0xccff11);
      directionalLight.position.set(1, 1, 1).normalize();
      scene.add(directionalLight);
	  
	  
	  
	  
	  
	  
	var lightss1 = new THREE.PointLight( 0xf00fff, 3, 0 );
	lightss1.position.set( 1000, 0, 1000 );
	scene.add( lightss1 );
	var sphere1 = new THREE.Mesh(new THREE.SphereGeometry(100, 0, 0), new THREE.MeshNormalMaterial());
      sphere1.overdraw = true;
      sphere1.position.x=1000;
	  sphere1.position.z=1000;
	  sphere1.rotation.z+=xyz*(Math.PI/180);
	  
	  
	  scene.add(sphere1);
	  
	  
	    
	  
	  
	var lightss = new THREE.PointLight( 0xf00fff, 3, 0 );
	lightss.position.set( -1000, 0, 1000 );
	scene.add( lightss );
	var sphere = new THREE.Mesh(new THREE.SphereGeometry(100, 0, 0), new THREE.MeshNormalMaterial());
      sphere.overdraw = true;
      sphere.position.x=-1500;
	  sphere.position.z=1000;
	  sphere.rotation.z+=xyz*(Math.PI/180);
	  
	  
	  scene.add(sphere);
	  
	  var materialr = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./road.jpg')
		  });
	  
	  
	   var cube2 = new THREE.Mesh(new THREE.CubeGeometry(5000, 10,1000), materialr);
      cube2.overdraw = true;
	  cube2.position.x=1015;
	 cube2.rotation.x=90*(Math.PI)/180;
	 cube2.rotation.y=90*(Math.PI)/180;
	  cube2.castShadow = true;
      scene.add(cube2);
	
	  
      // start animation
      animate();
	  
	  
	  
	  
	  
	  