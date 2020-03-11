var compound_transform;
//wuts

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
		}
	}  
	console.log("hi");
	//compound_transform = new Matrix(4, 4); // change / remove this
    return compound_transform;
}

// automatically called whenever compound transform changes
function CalculateTransformedVertex(vertex) {
    // multiple vertex by compound_transform
    // `final_vertex = Matrix.multiply(...)`
    var final_vertex = new Vector(4); // change / remove this
	
    return final_vertex;
}

 // automatically called whenever user modifies a transform (changes type or values)
function ChangeTransform(index, type, values) {
	console.log("hi42");

    app.transforms[index].type = type;
    // update `app.transforms[index].mat4x4`
	
    // recalculate compound transform and tranformed vertex
    app.compound = CalculateCompoundTransform(app.transforms);
    app.final_vertex = CalculateTransformedVertex(app.vertex);
}
