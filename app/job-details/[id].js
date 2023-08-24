import {
  Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl
} from "react-native"
import { Stack, useRouter, useGlobalSearchParams } from "expo-router"
import { useCallback, useState } from 'react'

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics
} from '../../src/components'
import { COLORS, icons, SIZES } from "../../src/constants"
import useFetch from "../../src/hooks/useFetch"

const JobDetails = () => {
  const params = useGlobalSearchParams()
  const router = useRouter()

  const { data, isLoading, error, refetch} = useFetch('job-details', {
    job_id: params.id
  })
  return (
    <SafeAreaView style>

    </SafeAreaView>
  )
}

export default JobDetails