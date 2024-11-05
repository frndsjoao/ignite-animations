# useSharedValue: 
- Criar variável para guardar conteúdo que deve ser usado nas animações;
- Utiliza a thread de interface do usuário;
- Se o valor muda, as animações deverão alterar de acordo com o valor;

# useAnimatedStyle:
- Alteração de estilização reativa ao sharedValue;

# Pressable tem mais opções que o TouchableOpacity 

# Animações
withSpring utilizado para transição. Tbm pode usar o withTiming
Recebe objeto com configs de duração e eases
scale.value = withSpring(1.1, {duration: 700 });
scale.value = withSpring(1.1, { easing: Easing.bounce });

# Interpolação de cores
