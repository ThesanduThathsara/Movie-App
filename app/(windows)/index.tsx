import {ActivityIndicator, Animated, FlatList, Image, Text, View} from "react-native";
import {images} from "@/assets/constants/images";
import ScrollView = Animated.ScrollView;
import {icons} from "@/assets/constants/icons";
import SearchBar from "@/components/SearchBar";
import {useRouter} from "expo-router";
import useFetch from "@/services/useFetch";
import {fetchMovies} from "@/services/api";
import MovieCard from "@/components/MovieCard";

export default function Index() {

    const router = useRouter();

    const {
        data:movies,
        loading:moviesLoading,
        error:moviesError}=useFetch(()=>fetchMovies({query:''}
    ))

  return (
    <View className="flex-1 bg-black">
        <Image source={images.bg} className="absolute w-full h-full z-0"/>  {/* background image*/}

        <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight:"100%", paddingBottom:10}}>
            <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>  {/*home page logo*/}

            {moviesLoading ?(
                <ActivityIndicator
                    size="large"
                    color="#0000ff"
                    className="mt-10 self-center"
                />
            ):moviesError?(
                <Text>Error: {moviesError?.message}</Text>
            ):(
                <View className="flex-1 mt-5">
                    <SearchBar
                        onPress={() => router.push("/search")}  /*once press move to the search*/
                        placeholder="Jurassic World"
                    />
                    <>
                        <Text className="text-lg text-white font-bold mt-5 mb-3 ">Latest Movies</Text>

                        <FlatList
                            data={movies}
                            renderItem={({item})=>(
                                <MovieCard
                                    {...item}
                                />
                            )}
                                keyExtractor={(item)=>item.id.toString()}
                                numColumns={3}
                                columnWrapperStyle={{
                                    justifyContent:'flex-start',
                                    gap:20,
                                    paddingRight:5,
                                    marginBottom:10
                                }}
                            className="mt-2 pb-32"
                            scrollEnabled={false}
                        />
                    </>
                </View>
            )}
        </ScrollView>
    </View>
  );
}
