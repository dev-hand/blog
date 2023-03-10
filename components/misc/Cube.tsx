import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { Frame } from 'components/common/Frame'
import { ThemeColor } from 'infra/type'
import { theme } from 'styles/theme'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

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
    const controls = new OrbitControls(camera, renderer.domElement)

    camera.position.z = isDesktop ? 3 : 5

    // BoxGeometry 생성
    const SphereGeometry = new THREE.SphereGeometry(1, 32, 32)
    const material = new THREE.MeshStandardMaterial({
      color: '0xffffff',
      wireframe: true,
    })

    // BoxMesh 생성
    const sphereMesh = new THREE.Mesh(SphereGeometry, material)
    scene.add(sphereMesh)

    const light = new THREE.DirectionalLight('#ffffff', 1)
    light.position.set(-1, 2, 4)
    scene.add(light)

    // TextGeometry 생성
    const fontLoader = new FontLoader()
    fontLoader.load(
      'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
      (font) => {
        const options = {
          font: font,
          size: 0.2,
          height: 0.1,
          curveSegments: 100,
          bevelEnabled: true,
          bevelThickness: 0.01,
          bevelSize: 0.01,
          bevelOffset: 0,
          bevelSegments: 10,
        }
        const textGeometryFront = new TextGeometry('NextJS', options)
        const textGeometryRight = new TextGeometry('TypeScript', options)
        const textGeometryLeft = new TextGeometry('SWR', options)
        const textGeometryBack = new TextGeometry('MobX', options)
        const textMaterial = new THREE.MeshStandardMaterial({
          color: '#ffffff',
        })
        const textMeshFront = new THREE.Mesh(textGeometryFront, textMaterial)
        const textMeshRight = new THREE.Mesh(textGeometryRight, textMaterial)
        const textMeshLeft = new THREE.Mesh(textGeometryLeft, textMaterial)
        const textMeshBack = new THREE.Mesh(textGeometryBack, textMaterial)
        textMeshFront.position.set(-0.5, 0, 1)
        textMeshRight.position.set(1, 0, 0.7)
        textMeshLeft.position.set(-1, 0, -0.4)
        textMeshBack.position.set(0.5, 0, -1)
        textMeshRight.rotateY(1.56)
        textMeshLeft.rotateY(-1.56)
        textMeshBack.rotateY(3.15)
        sphereMesh.add(textMeshFront)
        sphereMesh.add(textMeshRight)
        sphereMesh.add(textMeshLeft)
        sphereMesh.add(textMeshBack)
      },
    )

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(theme.color.background2) // 16진수 색상 코드 사용

    function animate() {
      requestAnimationFrame(animate)
      controls.update()
      sphereMesh.rotation.y += 0.005
      renderer.render(scene, camera)
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
