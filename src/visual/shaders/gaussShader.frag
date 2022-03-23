/**
 * Gaussian Function.
 * https://en.wikipedia.org/wiki/Gaussian_function
 *
 * @author Nikita Agafonov
 * @copyright (c) 2020-2022 Open Science Tools Ltd. (https://opensciencetools.org)
 * @license Distributed under the terms of the MIT License
 * @description Creates a 2d Gaussian image as if 1d Gaussian graph was rotated arount Y axis and observed from above.
 * @usedby GratingStim.js
 */

#version 300 es
precision mediump float;

in vec2 vUvs;
out vec4 shaderOut;

uniform float uA;
uniform float uB;
uniform float uC;

#define M_PI 3.14159265358979

void main() {
    vec2 uv = vUvs;
    float c2 = uC * uC;
    float x = length(uv - .5);
    float g = uA * exp(-pow(x - uB, 2.) / c2 * .5);
    shaderOut = vec4(vec3(g), 1.);
}