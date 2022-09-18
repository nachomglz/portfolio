import Particles from "react-tsparticles"
import particlesConfig from "./config/particles.config"
import { loadSlim } from "tsparticles-slim"
import { useCallback, useMemo } from "react"

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return particlesConfig
  }, [])

  const particlesInit = useCallback((engine: any): any => {
    loadSlim(engine)
  }, [])

  return <Particles init={particlesInit} options={options} />
}

export default ParticlesComponent
