var compound_transform;

//yy


// automatically called whenever any transform changes
function CalculateCompoundTransform(transforms) {
    // matrices in `transforms[i].mat4x4`
    // note `transforms[0]` is first tranform to apply to vertex
        
    // if only one transform, set compound transform equal to it
    // otherwise multiply all matrices together (in proper order)
    // `compound_transform = Matrix.multiply(...)`
	
    //var tranform_matrices = [];
	if(transforms.length == 1){		// if theres only one transform
		compound_transform = transforms[0].mat4x4;
	}
	else if(transforms.length > 1){
		compound_transform = transforms[0].mat4x4;
		for(var i = 1; i < transforms.length; i++){
			compound_transform = Matrix.multiply([transforms[i].mat4x4, compound_transform]) //IS THIS THE RIGHT ORDER OF MULT?
			console.log("#" + i + " loop\n" + "current_transforms: " + transforms[i].mat4x4 + "\ncompound: " + compound_transform);
		}
	}
	
    return compound_transform;
}

// automatically called whenever compound transform changes
function CalculateTransformedVertex(vertex) {
    // multiple vertex by compound_transform
    // `final_vertex = Matrix.multiply(...)`
	
		//var final_vertex = new Vector(4);// change / remove this
		//Vector4(final_vertex, vertex[0], vertex[1], vertex[2], vertex[3]);
	
    //var final_vertex = app.final_vertex; 
	var final_vertex = Matrix.multiply([compound_transform, vertex]);
	
    return final_vertex;
}

 // automatically called whenever user modifies a transform (changes type or values)
function ChangeTransform(index, type, values) {

    app.transforms[index].type = type;
    // update `app.transforms[index].mat4x4`
	switch(type) {
		case 'translate':
			Mat4x4Translate(app.transforms[index].mat4x4, values[0], values[1], values[2]);
			break;
		case 'scale':
			Mat4x4Scale(app.transforms[index].mat4x4, values[0], values[1], values[2]);
			break;
		case 'rotate_x':
			Mat4x4RotateX(app.transforms[index].mat4x4, values[0]);
			break;		
		case 'rotate_y':
			Mat4x4RotateY(app.transforms[index].mat4x4, values[0]);
			break;		
		case 'rotate_z':
			Mat4x4RotateZ(app.transforms[index].mat4x4, values[0]);
			break;		
		default:
		console.log("Parameter 'type' is not a valid case. Default case reached in switch statement");
	}
	
    // recalculate compound transform and tranformed vertex
    app.compound = CalculateCompoundTransform(app.transforms);
	
    app.final_vertex = CalculateTransformedVertex(app.vertex);
}
