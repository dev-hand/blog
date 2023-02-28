import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { Frame } from 'components/common/Frame'
import { ThemeColor } from 'infra/type'
import { theme } from 'styles/theme'

const Cube: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isDesktop = window.innerWidth >= 1080
  useEffect(() => {
    if (!canvasRef.current) return

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvasRef.current,
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    camera.position.z = 3

    // BoxGeometry 생성
    const boxGeometry = new THREE.BoxGeometry(1.4, 1.4, 1.4)
    const material = new THREE.MeshStandardMaterial({
      color: theme.color.primary,
    })

    // BoxMesh 생성
    const boxMesh = new THREE.Mesh(boxGeometry, material)
    scene.add(boxMesh)

    const light = new THREE.DirectionalLight('#ffffff', 1)
    light.position.set(-1, 2, 4)
    scene.add(light)

    // TextGeometry 생성
    const fontLoader = new FontLoader()
    fontLoader.load(
      'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
      (font) => {
        const textGeometry = new TextGeometry('Learning Three.js', {
          font: font,
          size: isDesktop ? 0.5 : 0.2,
          height: 0.2,
          curveSegments: 10,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.02,
          bevelOffset: 0,
          bevelSegments: 10,
        })
        const textMaterial = new THREE.MeshStandardMaterial({
          color: '#ffffff',
        })
        const textMesh = new THREE.Mesh(textGeometry, textMaterial)
        textMesh.position.set(isDesktop ? -2.6 : -1, 1.1, -0.5)
        scene.add(textMesh)
      },
    )

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(theme.color.background2) // 16진수 색상 코드 사용

    function animate() {
      renderer.render(scene, camera)
      boxMesh.rotation.y += 0.01
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <Frame backgroundColor={ThemeColor.B2}>
      <canvas ref={canvasRef} />
    </Frame>
  )
}

export default Cube
