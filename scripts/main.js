var compound_transform;

//ppp


// automatically called whenever any transform changes
function CalculateCompoundTransform(transforms) {
    // matrices in `transforms[i].mat4x4`
    // note `transforms[0]` is first tranform to apply to vertex
        
    // if only one transform, set compound transform equal to it
    // otherwise multiply all matrices together (in proper order)
    // `compound_transform = Matrix.multiply(...)`
	console.log("hi1");
    var tranform_matrices = [];
	if(transforms.length == 1){		// if theres only one transform
		compound_transform = transforms[0];
	}
	else if(transforms.length > 1){
		compound_transform = transforms[0];
		
		for(var i = 1; i < transforms.length; i++){
		compound_transform = Matrix.multiply(transforms[i], compound_transform) //IS THIS THE RIGHT ORDER OF MULT?
		console.log( "#" + i + " loop");
		}
	}
	console.log("hippo!");
	//compound_transform = new Matrix(4, 4); // change / remove this 
    return compound_transform;
}

// automatically called whenever compound transform changes
function CalculateTransformedVertex(vertex) {
	console.log("HELLO");
    // multiple vertex by compound_transform
    // `final_vertex = Matrix.multiply(...)`
    var final_vertex = new Vector(4); // change / remove this
	console.log("HELLOOOOO");
    return final_vertex;
}

 // automatically called whenever user modifies a transform (changes type or values)
function ChangeTransform(index, type, values) {
	console.log("hi42");

    app.transforms[index].type = type;
    // update `app.transforms[index].mat4x4`
	app.transforms[index].mat4x4 = values;
	console.log("hi776");
    // recalculate compound transform and tranformed vertex
    app.compound = CalculateCompoundTransform(app.transforms);
	console.log("hi77");
    app.final_vertex = CalculateTransformedVertex(app.vertex);
	console.log("hi88");
}
