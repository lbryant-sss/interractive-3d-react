import * as THREE from 'three';
import { useRef, useState } from 'react';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

function Interractive() {
    return(
        <>
        <h1>This works</h1>
        </>
    )
}

export default Interractive;