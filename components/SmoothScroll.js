'use client';
import {useEffect} from 'react';
import Lenis from '@studio-freight/lenis';
export default function SmoothScroll(){useEffect(()=>{const lenis=new Lenis({duration:1.15,smoothWheel:true});let id;const raf=t=>{lenis.raf(t);id=requestAnimationFrame(raf)};id=requestAnimationFrame(raf);return()=>{cancelAnimationFrame(id);lenis.destroy()}},[]);return null}
